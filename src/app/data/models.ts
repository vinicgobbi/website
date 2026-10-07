export interface Profile {
  nome: string;
  nomeCurto: string;
  cargo: string;
  resumo: string;
  disponivel: boolean;
  localizacao: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
}

export interface Experience {
  empresa: string;
  site?: string;
  cargo: string;
  /** Formato AAAA-MM */
  inicio: string;
  /** Formato AAAA-MM; ausente quando é o emprego atual */
  fim?: string;
  atividades: string[];
  tecnologias: string[];
}

export type ProjectCategory = 'profissional' | 'pessoal';

export interface Project {
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: ProjectCategory;
  tecnologias: string[];
  contribuidores: string[];
  destaque?: boolean;
  links: {
    github?: string;
    website?: string;
  };
}

export interface SkillGroup {
  titulo: string;
  icone: string;
  itens: Skill[];
}

export interface Skill {
  nome: string;
  /** Nome do SVG em public/assets/icons/ ou classe do Bootstrap Icons (prefixo "bi-"). */
  icone: string;
  /** Ícone preto de uma cor só: é invertido no tema escuro. */
  mono?: boolean;
}

export interface Education {
  instituicao: string;
  curso: string;
  periodo: string;
}

export interface Cert {
  tipo: 'curso' | 'certificação';
  anexo: string;
  preview: string;
  titulo: string;
  emissor: string;
  data_emissao: string;
  data_vencimento?: string;
  codigo?: string;
  url?: string;
}
