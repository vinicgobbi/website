import { TestBed } from '@angular/core/testing';
import { VLIBRAS_ROOT, VLIBRAS_SCRIPT, Vlibras } from './vlibras';

const SELECTOR = `script[src="${VLIBRAS_SCRIPT}"]`;

describe('Vlibras', () => {
  afterEach(() => {
    document.querySelectorAll(SELECTOR).forEach((el) => el.remove());
    delete window.VLibras;
  });

  async function render(): Promise<void> {
    const fixture = TestBed.createComponent(Vlibras);
    fixture.detectChanges(); // dispara o afterNextRender, que injeta o script
    await fixture.whenStable();
  }

  function script(): HTMLScriptElement {
    return document.querySelector(SELECTOR) as HTMLScriptElement;
  }

  it('injeta o script do VLibras uma vez só', async () => {
    await render();
    TestBed.resetTestingModule();
    await render();
    expect(document.querySelectorAll(SELECTOR)).toHaveLength(1);
  });

  it('inicia o widget quando o script carrega', async () => {
    const Widget = vi.fn();
    await render();
    window.VLibras = { Widget };
    script().onload?.(new Event('load'));
    expect(Widget).toHaveBeenCalledWith({ rootPath: VLIBRAS_ROOT, avatar: 'icaro', position: 'R' });
  });

  it('não quebra se o script carregar sem expor o widget', async () => {
    await render();
    expect(() => script().onload?.(new Event('load'))).not.toThrow();
  });
});
