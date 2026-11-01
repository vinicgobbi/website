import { VERSION } from '@angular/core';
import { ABOUT, PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { SKILLS } from '../../data/skills';
import { NAV_LINKS } from '../../sections/navbar/navbar';

export interface CommandResult {
  output: string[];
  /** Arte em ASCII: não pode quebrar linha. */
  art?: boolean;
  action?: 'clear' | 'exit' | 'panic';
  /** Seção da página para onde o terminal deve navegar. */
  goto?: string;
}

const HOST = 'vinicgobbi.dev.br';
const NOT_FOUND = 'Arquivo ou diretório inexistente';

const TUX = [
  '    .--.     ',
  '   |o_o |    ',
  '   |:_/ |    ',
  '  //   \\ \\   ',
  ' (|     | )  ',
  "/'\\_   _/`\\  ",
  '\\___)=(___/  ',
];

const FILES: Record<string, () => string[]> = {
  'sobre.txt': () => [ABOUT.join('\n\n')],
  'contato.txt': () => [
    `e-mail:   ${PROFILE.email}`,
    `linkedin: ${PROFILE.linkedin}`,
    `github:   ${PROFILE.github}`,
  ],
  'cv.pdf': () => [`cat: cv.pdf: arquivo binário. Baixe em https://${HOST}/${PROFILE.cv}`],
};

const DIRECTORIES: Record<string, () => string[]> = {
  projetos: () => PROJECTS.map((project) => project.titulo),
  habilidades: () => SKILLS.flatMap((group) => group.itens.map((skill) => skill.nome)),
};

const text = (...output: string[]): CommandResult => ({ output });

/** Ignora opções (-la) e a barra final (projetos/), que não mudam nada aqui. */
const paths = (args: string[]): string[] =>
  args.filter((arg) => !arg.startsWith('-')).map((arg) => arg.replace(/(.)\/$/, '$1'));

function neofetch(): CommandResult {
  const info = [
    `visitante@${HOST}`,
    '-'.repeat(`visitante@${HOST}`.length),
    'OS: Portfólio GNU/Linux',
    `Kernel: Angular ${VERSION.full}`,
    'Shell: vgsh',
    `Uptime: ${Math.floor(performance.now() / 60_000)} min`,
    `Cargo: ${PROFILE.cargo}`,
    `Projetos: ${PROJECTS.length}`,
    `Local: ${PROFILE.localizacao}`,
  ];
  const height = Math.max(TUX.length, info.length);
  return {
    art: true,
    output: Array.from({ length: height }, (_, i) =>
      `${TUX[i] ?? ' '.repeat(TUX[0].length)}${info[i] ?? ''}`.trimEnd(),
    ),
  };
}

function cowsay(args: string[]): CommandResult {
  const message = args.join(' ') || 'mu';
  return {
    art: true,
    output: [
      ` ${'_'.repeat(message.length + 2)}`,
      `< ${message} >`,
      ` ${'-'.repeat(message.length + 2)}`,
      '        \\   ^__^',
      '         \\  (oo)\\_______',
      '            (__)\\       )\\/\\',
      '                ||----w |',
      '                ||     ||',
    ],
  };
}

function ls(args: string[]): CommandResult {
  const [path] = paths(args);
  if (!path) return text('sobre.txt  contato.txt  cv.pdf  projetos/  habilidades/');
  if (Object.hasOwn(DIRECTORIES, path)) return text(...DIRECTORIES[path]());
  if (Object.hasOwn(FILES, path)) return text(path);
  return text(`ls: não foi possível acessar '${path}': ${NOT_FOUND}`);
}

function cat(args: string[]): CommandResult {
  const [path] = paths(args);
  if (!path) return text('uso: cat <arquivo>');
  if (Object.hasOwn(FILES, path)) return text(...FILES[path]());
  if (Object.hasOwn(DIRECTORIES, path)) return text(`cat: ${path}: É um diretório`);
  return text(`cat: ${path}: ${NOT_FOUND}`);
}

function cd(args: string[]): CommandResult {
  const [path] = paths(args);
  if (!path || path === '~') return { output: [], goto: 'inicio' };
  if (NAV_LINKS.some((link) => link.id === path)) return { output: [], goto: path };
  return text(`cd: ${path}: ${NOT_FOUND}`);
}

function sudo(args: string[]): CommandResult {
  const command = args.join(' ');
  if (!command) return text('uso: sudo <comando>');
  if (/^rm -(rf|fr) \/\*?( --no-preserve-root)?$/.test(command)) {
    return { output: [], action: 'panic' };
  }
  if (command === 'make me a sandwich') return text('Ok. 🥪');
  return text('visitante não está no arquivo sudoers. Este incidente será reportado.');
}

const COMMANDS = new Map<string, (args: string[]) => CommandResult>([
  [
    'help',
    () =>
      text(
        'ls [dir]        lista os arquivos',
        'cat <arquivo>   mostra um arquivo (tente sobre.txt)',
        'cd <seção>      vai até uma seção da página',
        'neofetch        informações do sistema',
        'whoami, pwd, uname, date, echo, cowsay',
        'clear           limpa a tela',
        'exit            fecha o terminal (ou Esc)',
        '',
        'Tem mais coisa escondida. Só não rode sudo rm -rf / 😉',
      ),
  ],
  ['whoami', () => text('visitante', `(o dono daqui é ${PROFILE.nome}, ${PROFILE.cargo})`)],
  ['pwd', () => text('/home/visitante')],
  ['ls', ls],
  ['cat', cat],
  ['cd', cd],
  ['neofetch', neofetch],
  ['fastfetch', neofetch],
  [
    'uname',
    (args) =>
      text(args.includes('-a') ? `Linux ${HOST} ${VERSION.full}-angular x86_64 GNU/Linux` : 'Linux'),
  ],
  ['date', () => text(new Date().toLocaleString('pt-BR'))],
  ['echo', (args) => text(args.join(' '))],
  ['cowsay', cowsay],
  ['clear', () => ({ output: [], action: 'clear' })],
  ['exit', () => ({ output: [], action: 'exit' })],
  ['logout', () => ({ output: [], action: 'exit' })],
  ['sudo', sudo],
  ['rm', () => text('rm: não foi possível remover: Permissão negada')],
  ['make', (args) => text(args.join(' ') === 'me a sandwich' ? 'Faça você mesmo.' : 'make: *** Nenhum alvo. Pare.')],
  ['man', () => text('RTFM... brincadeira: digite help.')],
  ['vim', () => text('Pronto, agora você nunca mais sai daqui. (Dica: exit)')],
  ['vi', () => text('Pronto, agora você nunca mais sai daqui. (Dica: exit)')],
  [':q', () => text('E: Você não está no vim. Ainda.')],
  ['nano', () => text('Aqui ninguém julga.')],
  ['emacs', () => text('Ótimo sistema operacional. Só falta um bom editor de texto.')],
  ['apt', () => text('E: Você é root? Pois é, não é.')],
  ['pacman', () => text('error: você precisa ser root. Ah, e btw, I use Arch.')],
]);

export function runCommand(input: string): CommandResult {
  const [name, ...args] = input.trim().split(/\s+/);
  if (!name) return text();
  return COMMANDS.get(name)?.(args) ?? text(`vgsh: ${name}: comando não encontrado (tente help)`);
}

/** Completa o nome do comando quando só um deles começa com o texto digitado. */
export function completeCommand(input: string): string {
  const matches = [...COMMANDS.keys()].filter((name) => input && name.startsWith(input));
  return matches.length === 1 ? `${matches[0]} ` : input;
}
