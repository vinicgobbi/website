import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CERTS } from '../../data/certs';
import { EDUCATION } from '../../data/profile';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-education',
  imports: [RevealOnScroll],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly certs = CERTS;
  protected readonly copiedCode = signal<string | null>(null);

  protected copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      this.copiedCode.set(code);
      setTimeout(() => {
        if (this.copiedCode() === code) this.copiedCode.set(null);
      }, 2000);
    });
  }
}
