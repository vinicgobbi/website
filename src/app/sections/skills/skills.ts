import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS } from '../../data/skills';
import { RevealOnScroll } from '@vinicgobbi/ui/a11y';

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
