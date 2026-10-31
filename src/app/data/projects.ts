import { Project } from './models';

export const PROJECTS: Project[] = [
  {
    titulo: 'Amigo Indica',
    descricao:
      'Sistema que gerencia o programa de indicações da FAESA, facilitando a captação de novos alunos através de recomendações.',
    imagem: 'assets/projects/amigo_indica.webp',
    categoria: 'profissional',
    tecnologias: ['Laravel', 'React', 'TypeScript', 'SQL Server'],
    contribuidores: ['vinicgobbi', 'nascimentodavi'],
    destaque: true,
    links: { website: 'https://amigoindica.faesa.br' },
  },
  {
    titulo: 'Instrumentos Avaliativos',
    descricao:
      'Sistema para gerenciar notas e acompanhar o desempenho dos alunos de Medicina da FAESA, com API em Laravel e interface dinâmica em React.',
    imagem: 'assets/projects/instrumentos_avaliativos.webp',
    categoria: 'profissional',
    tecnologias: ['Laravel', 'React', 'TypeScript', 'SQL Server'],
    contribuidores: ['vinicgobbi', 'nascimentodavi'],
    destaque: true,
    links: {},
  },
  {
    titulo: 'Simulador do ENEM',
    descricao:
      'Simulador de descontos com base na nota do ENEM, integrado ao RD Station para captação de leads.',
    imagem: 'assets/projects/simulador_enem.webp',
    categoria: 'profissional',
    tecnologias: ['Symfony', 'PHP', 'RD Station'],
    contribuidores: ['vinicgobbi', 'nascimentodavi'],
    destaque: true,
    links: { website: 'https://simuladorenem.faesa.br' },
  },
  {
    titulo: 'Single Sign-On (SSO) AVA FAESA',
    descricao:
      'Simplifica o acesso dos alunos ao Ambiente Virtual de Aprendizagem, integrado à infraestrutura D2L via protocolo SAML.',
    imagem: 'assets/projects/ssoava.webp',
    categoria: 'profissional',
    tecnologias: ['Laravel', 'SAML', 'D2L'],
    contribuidores: ['vinicgobbi'],
    links: {},
  },
  {
    titulo: 'Sistema de Agendamentos — Clínicas',
    descricao:
      'Gestão de agendamentos e controle de horários das clínicas de Odontologia e Psicologia da FAESA.',
    imagem: 'assets/projects/agendamento_clinicas.webp',
    categoria: 'profissional',
    tecnologias: ['Laravel', 'SQL Server'],
    contribuidores: ['vinicgobbi', 'nascimentodavi', 'guilhermebrancocod'],
    links: {},
  },
  {
    titulo: 'Notificações Automatizadas — FAESA APP',
    descricao:
      'Stored Procedures em SQL Server que automatizam o envio de notificações de faltas, notas e pendências financeiras.',
    imagem: 'assets/projects/notificacoes.webp',
    categoria: 'profissional',
    tecnologias: ['SQL Server', 'T-SQL'],
    contribuidores: ['vinicgobbi', 'nascimentodavi'],
    links: {},
  },
  {
    titulo: 'Resultados das Eleições',
    descricao:
      'Apuração das eleições brasileiras em tempo real com os dados oficiais do TSE: de presidente a vereador, do país inteiro até cada um dos 5.570 municípios, com mapa, notificações e tema escuro.',
    imagem: 'assets/projects/resultado_eleicoes.webp',
    categoria: 'pessoal',
    tecnologias: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS'],
    contribuidores: ['vinicgobbi'],
    destaque: true,
    links: {
      github: 'https://github.com/vinicgobbi/resultado',
      website: 'https://resultado.vinicgobbi.dev.br',
    },
  },
  {
    titulo: 'Automação de Ambiente',
    descricao:
      'Pós-instalação para Ubuntu e Windows com interface interativa no terminal (TUI): escolha o que instalar e configurar, de Docker, VS Code e PHP + SQL Server a temas, extensões e dotfiles, numa máquina nova pronta para desenvolver.',
    imagem: 'assets/projects/automacao_ambiente.webp',
    categoria: 'pessoal',
    tecnologias: ['Go', 'Bubble Tea', 'Linux', 'Windows'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/post-install' },
  },
  {
    titulo: 'Deploy Tools',
    descricao:
      'Deploy por releases com symlink para apps servidos pelo Apache: build no GitHub Actions, envio por SSH a um usuário dedicado, rollback instantâneo e uma CLI de tela cheia para operar o servidor.',
    imagem: 'assets/projects/deploy_tools.webp',
    categoria: 'pessoal',
    tecnologias: ['Go', 'GitHub Actions', 'SSH', 'Apache'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/deploy-tools' },
  },
  {
    titulo: 'Extensões para o Nautilus',
    descricao:
      'Extensões para o gerenciador de arquivos do GNOME que adicionam ao menu de contexto: copiar o caminho e abrir no VS Code.',
    imagem: 'assets/projects/nautilus_extensoes.webp',
    categoria: 'pessoal',
    tecnologias: ['Python', 'Bash', 'GNOME'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/nautilus-copypath' },
  },
  {
    titulo: 'Portfólio Pessoal',
    descricao:
      'Este site: meu cartão de visitas digital, feito em Angular com SSR para apresentar minha trajetória e projetos.',
    imagem: 'assets/projects/portfolio_pessoal.webp',
    categoria: 'pessoal',
    tecnologias: ['Angular', 'TypeScript', 'SCSS'],
    contribuidores: ['vinicgobbi'],
    links: {
      github: 'https://github.com/vinicgobbi/website',
      website: 'https://vinicgobbi.dev.br',
    },
  },
];
