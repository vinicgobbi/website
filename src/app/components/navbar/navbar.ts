
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [NgbCollapse],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar.scss'
})
export class Navbar {
  isCollapsed = true;
  activeSection: string = 'header';

  sectionIds: string[] = ['header', 'about', 'experience', 'certifications', 'stacks', 'projects', 'contact'];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    let currentSection: string = this.sectionIds[0];
    const navbarHeight = document.getElementById('main-navbar')?.offsetHeight ?? 75;
    const offset = navbarHeight + 50;

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= offset) {
          currentSection = sectionId;
        }
      }
    }

    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

    if (atBottom) {
      currentSection = this.sectionIds[this.sectionIds.length - 1];
    }

    this.activeSection = currentSection;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbar = document.getElementById('main-navbar');
    const navbarHeight = navbar?.offsetHeight ?? 0;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 15;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    this.isCollapsed = true;
  }
}
