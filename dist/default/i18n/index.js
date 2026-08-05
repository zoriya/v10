"use client";
import { I18nContext, useLocale, useTranslator } from "./context.js";
import { I18nProvider, createI18n } from "./create-i18n.js";
import { LOCALES, createTranslator, findLocaleKeys, getI18nTranslations, hasRegisteredLocale, isText, onI18nRegistryChange, registerI18n } from "@videojs/core/i18n";
export { I18nContext, I18nProvider, LOCALES, createI18n, createTranslator, findLocaleKeys, getI18nTranslations, hasRegisteredLocale, isText, onI18nRegistryChange, registerI18n, useLocale, useTranslator };
