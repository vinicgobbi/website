import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience';
import { formatDuration, formatMonth } from '../../shared/date-utils';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScroll],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly items = EXPERIENCE.map((xp) => ({
    ...xp,
    periodo: `${formatMonth(xp.inicio)} — ${xp.fim ? formatMonth(xp.fim) : 'atual'}`,
    duracao: formatDuration(xp.inicio, xp.fim),
  }));
}
