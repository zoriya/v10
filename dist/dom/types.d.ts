//#region src/dom/types.d.ts
interface CustomElementCallbacks {
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  adoptedCallback?(): void;
  attributeChangedCallback?(name: string, oldValue: string | null, newValue: string | null): void;
}
interface CustomElement extends HTMLElement, CustomElementCallbacks {}
type QueriedElement<S extends string, E extends Element> = S extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[S] : E;
type EventType<Events> = (keyof Events & string) | (string & {});
type EventListenerFor<Events, K> = ((event: K extends keyof Events ? Events[K] : Event) => void) | EventListenerOrEventListenerObject | null;
//#endregion
export { CustomElement, CustomElementCallbacks, EventListenerFor, EventType, QueriedElement };
//# sourceMappingURL=types.d.ts.map