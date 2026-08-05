#!/usr/bin/env bash
# publish.sh — publish the @videojs/* packages as standalone git branches.
#
# bun (and npm) cannot install a single package out of a monorepo over git:
# git-subdirectory dependencies are unimplemented (oven-sh/bun#15506). So a
# plain `github:zoriya/v10#<ref>` reference would resolve to the repo-root
# `video.js` package, which cannot satisfy `@videojs/react` + `@videojs/core`.
#
# This script works around that "gitpkg" style: it builds the packages and
# pushes each one to its OWN branch whose root is that package's built output
# (dist/ + package.json). A consumer lists ALL SIX packages as top-level deps,
# each a plain github: ref to its branch:
#
#   "@videojs/react": "github:zoriya/v10#build26-react"
#   "@videojs/core":  "github:zoriya/v10#build26-core"
#   "@videojs/media": "github:zoriya/v10#build26-media"
#   ...store, spf, utils
#
# Each package's internal `@videojs/*` deps are rewritten from `dependencies`
# to `peerDependencies` (range "*"). This is the crucial part: bun cannot
# resolve an @videojs package as a NESTED git/tarball dep — a nested git dep
# shared by 2+ parents fails outright, and a nested tarball reachable via 3+
# paths is mis-deduped ("failed to resolve"). @videojs/utils has five parents,
# so any nested form is unusable. As peers, bun does no nested resolution: the
# six top-level installs (each a single github: fetch) satisfy every package's
# peers. External deps (hls.js, signal-polyfill, ...) stay in `dependencies`.
#
# The per-package trees are assembled in throwaway git repos under $TMPDIR and
# pushed straight to the remote; this repo's own git/jj working state is never
# touched (aside from build artifacts written under packages/*/dist).
#
# Usage:  ./publish.sh
#
# Environment overrides:
#   VJS_REMOTE      git remote to push branches to
#                     (default: git@github.com:zoriya/v10.git)
#   VJS_REF_PREFIX  prefix for rewritten sibling dep specs; the dep's published
#                   commit SHA is appended
#                     (default: https://codeload.github.com/zoriya/v10/tar.gz/)
#   VJS_TAG         branch-name prefix / build tag  (default: build26)
#   BIOME_BINARY    path to a biome that runs on this host (auto-detected from
#                   PATH when unset; required on NixOS, where the bundled
#                   @biomejs native binary cannot run).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

REMOTE="${VJS_REMOTE:-git@github.com:zoriya/v10.git}"
OWNER="${VJS_OWNER:-zoriya/v10}"
REF_PREFIX="${VJS_REF_PREFIX:-https://codeload.github.com/zoriya/v10/tar.gz/}"
TAG="${VJS_TAG:-build26}"

# Topological order (deps before dependents); also the exact runtime closure of
# @videojs/react, which is all omni needs.
PKGS=(utils store spf media core react)

# --- toolchain --------------------------------------------------------------
# turbo needs a `pnpm` binary on PATH; this repo uses corepack. CI=true stops
# pnpm from trying to purge node_modules when there is no TTY.
export CI=true
SHIMDIR="$(mktemp -d)"
trap 'rm -rf "$SHIMDIR"' EXIT
if ! command -v pnpm >/dev/null 2>&1; then
  printf '#!/usr/bin/env bash\nexec corepack pnpm "$@"\n' > "$SHIMDIR/pnpm"
  chmod +x "$SHIMDIR/pnpm"
  export PATH="$SHIMDIR:$PATH"
fi
if [ -z "${BIOME_BINARY:-}" ] && command -v biome >/dev/null 2>&1; then
  export BIOME_BINARY="$(command -v biome)"
fi

# --- build ------------------------------------------------------------------
# --env-mode=loose lets BIOME_BINARY through turbo's (strict-by-default) env
# filter so the i18n codegen's `biome check` step can run.
echo ">> building @videojs/react and its dependency closure"
./node_modules/.bin/turbo run build --filter=@videojs/react... --env-mode=loose

HEAD_SHA="$(git -C "$ROOT" rev-parse --short HEAD 2>/dev/null || echo unknown)"

# --- publish each package to its own branch --------------------------------
# Cross-package deps are pinned to each sibling's immutable commit SHA via its
# codeload tarball URL (see header). Packages are published in topological
# order, so each dep's SHA is known before its dependents are assembled.
# SHAS maps "@videojs/<pkg>" -> published commit SHA.
declare -A SHAS

for pkg in "${PKGS[@]}"; do
  src="$ROOT/packages/$pkg"
  if [ ! -d "$src/dist" ]; then
    echo "!! packages/$pkg has no dist/ — build failed?" >&2
    exit 1
  fi

  work="$(mktemp -d)"
  cp -R "$src/dist" "$work/dist"
  cp "$src/package.json" "$work/package.json"
  if [ -f "$src/README.md" ]; then cp "$src/README.md" "$work/README.md"; fi
  if [ -d "$src/docs" ]; then cp -R "$src/docs" "$work/docs"; fi

  # Rewrite internal @videojs/* deps -> pinned SHA refs of already-published
  # siblings; drop devDeps and scripts so bun installs a pure prebuilt package
  # (no prepare/postinstall). SHAS_JSON carries the pkg->sha map.
  SHAS_JSON="$(
    { printf '{'; first=1
      for k in "${!SHAS[@]}"; do
        [ $first -eq 1 ] || printf ','
        printf '"%s":"%s"' "$k" "${SHAS[$k]}"; first=0
      done
      printf '}'; }
  )"
  REF_PREFIX="$REF_PREFIX" SHAS_JSON="$SHAS_JSON" node -e '
    const fs = require("fs");
    const file = process.argv[1];
    const pkg = JSON.parse(fs.readFileSync(file, "utf8"));
    const prefix = process.env.REF_PREFIX;
    const shas = JSON.parse(process.env.SHAS_JSON);
    const internal = ["utils","store","spf","media","core","react"]
      .map((s) => "@videojs/" + s);
    // Normalize any `workspace:*` spec (e.g. the optional @videojs/element
    // peer) to "*" since npm publish would resolve it and it is not published.
    for (const field of ["dependencies", "peerDependencies", "optionalDependencies"]) {
      const deps = pkg[field];
      if (!deps) continue;
      for (const name of Object.keys(deps)) {
        if (String(deps[name]).startsWith("workspace:")) deps[name] = "*";
      }
    }
    // Move internal @videojs/* deps from `dependencies` to `peerDependencies`.
    // bun cannot resolve these as NESTED git/tarball deps (nested-git bug +
    // 3-path diamond dedup bug). As peers with a plain "*" range, bun does no
    // nested resolution: the consumer installs all six @videojs packages at
    // top level (each a single github: fetch, no nesting) and those satisfy
    // the peers of every package. External deps (hls.js, signal-polyfill, etc)
    // stay in `dependencies` and install normally.
    if (pkg.dependencies) {
      pkg.peerDependencies = pkg.peerDependencies || {};
      for (const name of Object.keys(pkg.dependencies)) {
        if (internal.includes(name)) {
          delete pkg.dependencies[name];
          pkg.peerDependencies[name] = "*";
        }
      }
    }
    delete pkg.devDependencies;
    delete pkg.scripts;
    fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
  ' "$work/package.json"

  git -C "$work" init -q
  git -C "$work" add -A -f
  git -C "$work" -c user.email=publish@local -c user.name=publish \
    commit -qm "build($pkg): $TAG from $HEAD_SHA"
  sha="$(git -C "$work" rev-parse HEAD)"
  SHAS["@videojs/$pkg"]="$sha"
  git -C "$work" branch -M "$TAG-$pkg"
  echo ">> pushing $TAG-$pkg ($sha) -> $REMOTE"
  git -C "$work" push -f "$REMOTE" "$TAG-$pkg"
  rm -rf "$work" || true
done

echo ""
echo ">> done. Add ALL of these as top-level deps in the consumer:"
for pkg in "${PKGS[@]}"; do
  echo "   \"@videojs/$pkg\": \"github:${OWNER}#${TAG}-$pkg\","
done
echo "   (immutable SHA pins are also available, e.g. github:zoriya/v10#${SHAS[@videojs/react]})"
