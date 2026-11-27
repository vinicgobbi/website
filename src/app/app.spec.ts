import { TestBed } from '@angular/core/testing';
import { provideAnalytics } from '@vinicgobbi/ui/consent';
import { hasThemeInitScript } from '@vinicgobbi/ui/theme';
import indexHtml from '../index.html' with { loader: 'text' };
import { App } from './app';
import { NAV_LINKS } from './sections/navbar/navbar';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideAnalytics({ measurementId: 'G-TESTE123' })],
    }).compileComponents();
  });

  it('renderiza o nome no h1', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Vinícius Cavati Gobbi');
  });

  it('tem uma seção para cada link da navegação', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const { id } of NAV_LINKS) {
      expect(compiled.querySelector(`#${id}`), id).not.toBeNull();
    }
  });

  it('abre o terminal ao clicar no cursor do rodapé', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.window')).toBeNull();
    compiled.querySelector<HTMLButtonElement>('.footer__cursor')!.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.window')).not.toBeNull();
  });

  it('o index.html traz o script anti-flash do tema da versão instalada de @vinicgobbi/ui', () => {
    expect(hasThemeInitScript(indexHtml)).toBe(true);
  });
});
