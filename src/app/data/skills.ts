import { SkillGroup } from './models';

export const SKILLS: SkillGroup[] = [
  {
    titulo: 'Linguagens',
    icone: 'bi-code-slash',
    itens: [
      { nome: 'JavaScript', icone: 'javascript' },
      { nome: 'TypeScript', icone: 'typescript' },
      { nome: 'PHP', icone: 'php' },
      { nome: 'Python', icone: 'python' },
    ],
  },
  {
    titulo: 'Frameworks & Bibliotecas',
    icone: 'bi-boxes',
    itens: [
      { nome: 'Laravel', icone: 'laravel' },
      { nome: 'React', icone: 'react' },
      { nome: 'Angular', icone: 'angular' },
      { nome: 'Bootstrap', icone: 'bootstrap' },
    ],
  },
  {
    titulo: 'Banco de Dados & APIs',
    icone: 'bi-database',
    itens: [
      { nome: 'SQL Server', icone: 'microsoftsqlserver' },
      { nome: 'MySQL', icone: 'mysql' },
      { nome: 'APIs REST', icone: 'bi-arrow-left-right' },
      { nome: 'Postman', icone: 'postman' },
    ],
  },
  {
    titulo: 'DevOps & Ferramentas',
    icone: 'bi-tools',
    itens: [
      { nome: 'Git', icone: 'git' },
      { nome: 'GitHub', icone: 'github', mono: true },
      { nome: 'Docker', icone: 'docker' },
      { nome: 'Linux', icone: 'linux', mono: true },
      { nome: 'VS Code', icone: 'vscode' },
      { nome: 'pnpm', icone: 'pnpm' },
    ],
  },
];
