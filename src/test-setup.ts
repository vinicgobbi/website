/**
 * A partir do Node 25, o Node define um `localStorage` global que fica `undefined` sem a flag
 * `--localstorage-file`, e ele esconde o do jsdom. Aqui o do jsdom volta para o lugar.
 */
const jsdomWindow = (globalThis as { jsdom?: { window: Window } }).jsdom?.window;

for (const key of ['localStorage', 'sessionStorage'] as const) {
  if (jsdomWindow && !globalThis[key]) {
    Object.defineProperty(globalThis, key, {
      configurable: true,
      get: () => jsdomWindow[key],
    });
  }
}
