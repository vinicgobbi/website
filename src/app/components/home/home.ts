import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';
import { Projects } from '../projects/projects';
import { Navbar } from '../navbar/navbar';
import { Contact } from '../contact/contact';
import { Experience } from '../experience/experience';
import { Certs } from '../certs/certs';

@Component({
  selector: 'app-home',
  imports: [Navbar,Header, About, Experience, Stacks, Projects, Contact, Certs],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.scss'
})
export class Home {

}
