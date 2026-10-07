import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  imports: [RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly emailCopied = signal(false);

  protected copyEmail(): void {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2000);
    });
  }
}
