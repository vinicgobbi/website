import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { PROFILE } from '../../data/profile';

export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;

  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal<string | null>(null);
  protected readonly scrolled = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      // Destaca no menu a seção que ocupa a faixa central da tela.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeSection.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const { id } of NAV_LINKS) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }

      const onScroll = () => {
        this.scrolled.set(window.scrollY > 8);
        if (window.scrollY < 200) this.activeSection.set(null);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      });
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
