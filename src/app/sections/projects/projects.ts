import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCategory } from '../../data/models';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type Filter = 'todos' | ProjectCategory;

const INITIAL_COUNT = 6;

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly filters: { id: Filter; label: string; total: number }[] = [
    { id: 'todos', label: 'Todos', total: PROJECTS.length },
    {
      id: 'profissional',
      label: 'Profissionais',
      total: PROJECTS.filter((p) => p.categoria === 'profissional').length,
    },
    {
      id: 'pessoal',
      label: 'Pessoais',
      total: PROJECTS.filter((p) => p.categoria === 'pessoal').length,
    },
  ];

  protected readonly filter = signal<Filter>('todos');
  protected readonly expanded = signal(false);

  protected readonly filtered = computed(() => {
    const filter = this.filter();
    const list = filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.categoria === filter);
    // Destaques primeiro, mantendo a ordem original entre eles.
    return [...list].sort((a, b) => Number(!!b.destaque) - Number(!!a.destaque));
  });

  protected readonly visible = computed(() =>
    this.expanded() ? this.filtered() : this.filtered().slice(0, INITIAL_COUNT),
  );

  protected readonly hiddenCount = computed(() => this.filtered().length - this.visible().length);

  protected setFilter(filter: Filter): void {
    this.filter.set(filter);
    this.expanded.set(false);
  }
}
