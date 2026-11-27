import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NAV_LINKS, Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Terminal } from './shared/terminal/terminal';
import { Tux } from './shared/tux/tux';
import { PROFILE } from './data/profile';
import { Vlibras } from '@vinicgobbi/ui/a11y';
import { AnalyticsService, CookieBanner } from '@vinicgobbi/ui/consent';
import { Seasonal } from '@vinicgobbi/ui/seasonal';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, CookieBanner, Seasonal, Terminal, Tux, Vlibras],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly nome = PROFILE.nome;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
  protected readonly analytics = inject(AnalyticsService);
}
