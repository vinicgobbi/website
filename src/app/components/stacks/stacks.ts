import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-stacks',
  imports: [RevealOnScroll],
  templateUrl: './stacks.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './stacks.scss'
})
export class Stacks {

}
