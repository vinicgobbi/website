import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS } from '../../data/skills';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly groups = SKILLS;
}
