
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../services/projects-service';
import { Project } from '../../shared/interfaces/project';

@Component({
  selector: 'app-projects',
  imports: [],
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
