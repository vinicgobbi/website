import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScroll],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience.scss'
})
export class Experience {

}
