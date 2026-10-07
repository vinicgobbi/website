import { Experience } from './models';

export const EXPERIENCE: Experience[] = [
  {
    empresa: 'FAESA',
    site: 'https://www.faesa.br',
    cargo: 'Desenvolvedor Full-Stack (Estagiário)',
    inicio: '2025-07',
    atividades: [
      'Desenvolvimento Full-Stack de sistemas acadêmicos e administrativos com Laravel (PHP), React e JavaScript',
      'Modelagem de dados, gerenciamento de banco SQL Server e criação de Stored Procedures para automação de rotinas e notificações',
      'Criação, manutenção e integração de APIs RESTful para comunicação entre sistemas internos',
      'Atendimento de chamados técnicos e suporte nível 2 via GLPI, resolvendo falhas em ambiente de produção',
    ],
    tecnologias: ['Laravel', 'PHP', 'React', 'TypeScript', 'SQL Server', 'APIs REST', 'GLPI'],
  },
  {
    empresa: 'Oi Alimentos',
    cargo: 'Assistente / Auxiliar de PCM',
    inicio: '2022-11',
    fim: '2025-07',
    atividades: [
      'Promovido de Jovem Aprendiz para Auxiliar e, depois, para Assistente',
      'Controle de Ordens de Serviço com o sistema Engeman',
      'Requisição de materiais com o sistema Agrosys',
      'Atendimento a Solicitações de Serviço com base em prioridade',
      'Organização de rotinas com o método Kanban',
    ],
    tecnologias: ['Engeman', 'Agrosys', 'Kanban'],
  },
];
