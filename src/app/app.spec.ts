import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV_LINKS } from './sections/navbar/navbar';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
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
      expect(compiled.querySelector(`#${id}`)).withContext(id).not.toBeNull();
    }
  });
});
