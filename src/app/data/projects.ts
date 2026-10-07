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
    titulo: 'Plugins para Omarchy',
    descricao:
      'Widgets open-source para a barra do Omarchy (Arch + Hyprland): Now Bar, gerenciador de clipboard, VPN, mídia, bateria, energia e conexões remotas — além do tema Lunar Quest.',
    imagem: 'assets/projects/omarchy_plugins.webp',
    categoria: 'pessoal',
    tecnologias: ['QML', 'Python', 'Linux', 'Wayland'],
    contribuidores: ['vinicgobbi'],
    destaque: true,
    links: { github: 'https://github.com/vinicgobbi?tab=repositories&q=omarchy' },
  },
  {
    titulo: 'Automação de Ambiente',
    descricao:
      'Scripts de pós-instalação para Linux e Windows e dotfiles versionados, que automatizam a configuração de uma máquina nova para desenvolvimento.',
    imagem: 'assets/projects/automacao_ambiente.webp',
    categoria: 'pessoal',
    tecnologias: ['Bash', 'PowerShell', 'Linux', 'Windows'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/post-install' },
  },
  {
    titulo: 'Extensões para o Nautilus',
    descricao:
      'Extensões para o gerenciador de arquivos do GNOME que adicionam ao menu de contexto: copiar caminho, abrir no VS Code e abrir no terminal.',
    imagem: 'assets/projects/nautilus_extensoes.webp',
    categoria: 'pessoal',
    tecnologias: ['Python', 'Bash', 'GNOME'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi?tab=repositories&q=nautilus' },
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
