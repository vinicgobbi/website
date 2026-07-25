
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../services/projects-service';
import { Project } from '../../shared/interfaces/project';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects.scss'
})
export class Projects {
  projetos: Project[] = [];

  constructor(private projetosService: ProjectsService) {}

  ngOnInit(): void {
    this.projetosService.getProjetos().subscribe(data => {
      this.projetos = data;
    });
  }
}
