import { DOCUMENT, Injectable, afterNextRender, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/**
 * O tema inicial é aplicado por um script inline no index.html (antes do Angular carregar),
 * para não haver "flash" de tema errado. Aqui só sincronizamos o estado e tratamos a troca.
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<Theme>('dark');

  constructor() {
    afterNextRender(() => {
      const current = this.document.documentElement.getAttribute('data-theme');
      this.theme.set(current === 'light' ? 'light' : 'dark');
    });
  }

  toggle(): void {
    const theme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Armazenamento indisponível (ex.: modo privado): o tema vale só para esta visita.
    }
  }
}
