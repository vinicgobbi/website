import { Education, Profile } from './models';

export const PROFILE: Profile = {
  nome: 'Vinícius Cavati Gobbi',
  nomeCurto: 'Vinícius Gobbi',
  cargo: 'Desenvolvedor Full-Stack',
  resumo:
    'Desenvolvo sistemas web com Laravel, React e Angular — da modelagem do banco de dados à interface. Gosto de soluções que funcionam de verdade, com código limpo e interfaces intuitivas.',
  disponivel: true,
  localizacao: 'Cariacica, ES — Brasil',
  email: 'vinicius.cgobbi2004@gmail.com',
  linkedin: 'https://linkedin.com/in/vinicgobbi',
  github: 'https://github.com/vinicgobbi',
  cv: 'assets/cv-vinicius-gobbi.pdf',
};

export const ABOUT: string[] = [
  'Sou apaixonado por tecnologia, especialmente pelo ecossistema Linux e pela cultura Open-Source. Meu objetivo é criar soluções que funcionem de verdade, com interfaces intuitivas e código limpo e organizado.',
  'Atualmente atuo como desenvolvedor na FAESA, criando sistemas acadêmicos e administrativos com Laravel, React e SQL Server. Também tenho experiência sólida com Angular, o que me dá versatilidade para transitar entre diferentes stacks.',
  'Antes da área de desenvolvimento, trabalhei com Planejamento e Controle de Manutenção, onde fui promovido duas vezes — experiência que me ensinou a priorizar demandas, organizar processos e me adaptar rápido.',
];

export const EDUCATION: Education[] = [
  {
    instituicao: 'FAESA',
    curso: 'Bacharelado em Ciência da Computação',
    periodo: '2023–2026',
  },
];
