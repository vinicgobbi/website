import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Certs } from '../certs/certs';
import { Contact } from '../contact/contact';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar, Header, About, Stacks, Experience, Projects, Certs, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.scss'
})
export class Home {

}
