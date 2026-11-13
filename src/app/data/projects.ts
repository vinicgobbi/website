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
    titulo: 'RemoteMan',
    descricao:
      'Gerenciador de conexões RDP e SSH para Windows: servidores organizados por grupo, status online/offline, conexão rápida com Ctrl+K e importação de arquivos .rdp, ssh config e PuTTY, com as senhas guardadas no Gerenciador de Credenciais do Windows.',
    imagem: 'assets/projects/remoteman.webp',
    categoria: 'pessoal',
    tecnologias: ['C#', 'WinUI 3', '.NET', 'Windows'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/RemoteMan' },
  },
  {
    titulo: 'Plugins para Omarchy',
    descricao:
      'Widgets open-source para a barra do Omarchy (Arch + Hyprland), publicados no catálogo oficial: Now Bar, clipboard, VPN, mídia, bateria, energia, workspaces e conexões remotas. A Now Bar também ganhou uma versão para o GNOME, a Now Pill.',
    imagem: 'assets/projects/omarchy_plugins.webp',
    categoria: 'pessoal',
    tecnologias: ['QML', 'JavaScript', 'Linux', 'Wayland'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi?tab=repositories&q=omarchy-plugin' },
  },
  {
    titulo: 'Automação de Ambiente',
    descricao:
      'Pós-instalação com interface interativa no terminal (TUI) para Ubuntu e Fedora, Windows e Omarchy (Arch + Hyprland): escolha o que instalar e configurar, de Docker, VS Code e PHP + SQL Server a temas, extensões e dotfiles, numa máquina nova pronta para desenvolver.',
    imagem: 'assets/projects/automacao_ambiente.webp',
    categoria: 'pessoal',
    tecnologias: ['Go', 'Bubble Tea', 'Linux', 'Windows'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi?tab=repositories&q=post' },
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
    titulo: 'spotdown',
    descricao:
      'Baixa faixas, álbuns e playlists do Spotify por uma TUI, sem login: busca o áudio no YouTube Music e gera arquivos com tags completas, capa, letra sincronizada (LRCLIB) e playlist M3U.',
    imagem: 'assets/projects/spotdown.webp',
    categoria: 'pessoal',
    tecnologias: ['Go', 'Bubble Tea', 'yt-dlp', 'FFmpeg'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/spotdown' },
  },
  {
    titulo: 'git-sync',
    descricao:
      'Gerencia push mirrors de repositórios Gitea/Forgejo para GitHub, Gitea ou Forgejo por uma TUI: cria o repositório no destino, configura o espelhamento na origem e acompanha o status de cada envio.',
    imagem: 'assets/projects/git_sync.webp',
    categoria: 'pessoal',
    tecnologias: ['Go', 'Bubble Tea', 'Gitea', 'GitHub API'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi/git-sync' },
  },
  {
    titulo: 'Extensões para o Nautilus',
    descricao:
      'Extensões para o gerenciador de arquivos do GNOME que adicionam ao menu de contexto: copiar o caminho, abrir no VS Code e abrir no terminal padrão do Omarchy.',
    imagem: 'assets/projects/nautilus_extensoes.webp',
    categoria: 'pessoal',
    tecnologias: ['Python', 'Bash', 'GNOME'],
    contribuidores: ['vinicgobbi'],
    links: { github: 'https://github.com/vinicgobbi?tab=repositories&q=nautilus' },
  },
  {
    titulo: 'Página de Links',
    descricao:
      'Minha página de links: portfólio, LinkedIn, GitHub, currículo e redes sociais em um só lugar, com atalhos curtos gerados no build, QR code e versão em Markdown servida por edge function.',
    imagem: 'assets/projects/links.webp',
    categoria: 'pessoal',
    tecnologias: ['Angular', 'TypeScript', 'Netlify'],
    contribuidores: ['vinicgobbi'],
    links: {
      github: 'https://github.com/vinicgobbi/links',
      website: 'https://links.vinicgobbi.dev.br',
    },
  },
  {
    titulo: 'Vini Blog',
    descricao:
      'Blog pessoal sobre tecnologia, Linux, redes e servidores, com séries de posts como "Apache: do zero ao servidor em produção".',
    imagem: 'assets/projects/blog.webp',
    categoria: 'pessoal',
    tecnologias: ['Jekyll', 'Chirpy', 'Markdown'],
    contribuidores: ['vinicgobbi'],
    links: {
      github: 'https://github.com/vinicgobbi/blog',
      website: 'https://blog.vinicgobbi.dev.br',
    },
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
