import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_LINKS, Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { PROFILE } from './data/profile';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Projects, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly nome = PROFILE.nome;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
