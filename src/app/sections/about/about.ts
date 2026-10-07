import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT, EDUCATION, PROFILE } from '../../data/profile';
import { EXPERIENCE } from '../../data/experience';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly paragraphs = ABOUT;

  private readonly atual = EXPERIENCE.find((xp) => !xp.fim);
  private readonly formacao = EDUCATION[0];

  protected readonly facts = [
    {
      icone: 'bi-briefcase',
      rotulo: 'Atualmente',
      valor: this.atual ? `${this.atual.cargo} na ${this.atual.empresa}` : 'Disponível',
    },
    {
      icone: 'bi-mortarboard',
      rotulo: 'Formação',
      valor: `${this.formacao.curso.replace('Bacharelado em ', '')} — ${this.formacao.instituicao} (${this.formacao.periodo})`,
    },
    {
      icone: 'bi-stack',
      rotulo: 'Stack principal',
      valor: 'Laravel · React · TypeScript · SQL Server',
    },
    {
      icone: 'bi-geo-alt',
      rotulo: 'Localização',
      valor: PROFILE.localizacao,
    },
  ];
}
