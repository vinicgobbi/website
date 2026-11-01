import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  afterNextRender,
  afterRenderEffect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { completeCommand, runCommand } from './terminal-commands';

interface Entry {
  id: number;
  /** Ausente na mensagem de boas-vindas. */
  command?: string;
  output: string[];
  art?: boolean;
}

const TRIGGER = 'sudo';
const PANIC_DURATION = 6000;

const WELCOME = ['Bem-vindo ao vgsh! Digite help para ver os comandos.'];

/**
 * Easter egg para quem curte Linux: digitar "sudo" em qualquer ponto da página (ou clicar no
 * $_ do rodapé, para quem está sem teclado físico) abre um terminal de brincadeira.
 */
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onDocumentKeydown($event)',
  },
})
export class Terminal {
  private readonly document = inject(DOCUMENT);
  private readonly prompt = viewChild<ElementRef<HTMLInputElement>>('prompt');
  private readonly screen = viewChild<ElementRef<HTMLElement>>('screen');

  private nextId = 0;
  private typed = '';
  private history: string[] = [];
  private historyIndex = 0;
  private opener: HTMLElement | null = null;

  protected readonly opened = signal(false);
  protected readonly panic = signal(false);
  protected readonly entries = signal<Entry[]>(this.welcome());

  constructor() {
    afterNextRender(() => {
      console.info(`Psiu, você que abriu o DevTools: digite "${TRIGGER}" em qualquer lugar da página.`);
    });
    afterRenderEffect(() => {
      this.prompt()?.nativeElement.focus();
    });
    afterRenderEffect(() => {
      this.entries();
      const screen = this.screen()?.nativeElement;
      if (screen) screen.scrollTop = screen.scrollHeight;
    });
  }

  open(): void {
    const active = this.document.activeElement;
    this.opener = active instanceof HTMLElement ? active : null;
    this.opened.set(true);
  }

  protected close(): void {
    this.opened.set(false);
    // Sem isto, devolver o foco ao $_ do rodapé rolaria a página até lá.
    this.opener?.focus({ preventScroll: true });
    this.opener = null;
  }

  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (this.panic()) return;
    if (this.opened()) {
      if (event.key === 'Escape') this.close();
      return;
    }
    if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable]')) {
      return;
    }

    this.typed = (this.typed + event.key.toLowerCase()).slice(-TRIGGER.length);
    if (this.typed === TRIGGER) {
      this.typed = '';
      // Impede que a letra digitada caia no prompt, que recebe o foco logo em seguida.
      event.preventDefault();
      this.open();
    }
  }

  protected onPromptKeydown(event: KeyboardEvent, input: HTMLInputElement): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      input.value = completeCommand(input.value);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const step = event.key === 'ArrowUp' ? -1 : 1;
      this.historyIndex = Math.min(Math.max(this.historyIndex + step, 0), this.history.length);
      input.value = this.history[this.historyIndex] ?? '';
    }
  }

  protected submit(event: Event, input: HTMLInputElement): void {
    event.preventDefault();
    const command = input.value.trim();
    input.value = '';
    if (command) {
      this.history.push(command);
      this.historyIndex = this.history.length;
    }

    const { output, art, action, goto } = runCommand(command);
    if (action === 'clear') {
      this.entries.set([]);
    } else if (action === 'panic') {
      this.close();
      this.panic.set(true);
      setTimeout(() => this.reboot(), PANIC_DURATION);
    } else if (action === 'exit') {
      this.close();
    } else if (goto) {
      this.close();
      this.document.getElementById(goto)?.scrollIntoView();
    } else {
      this.entries.update((atual) => [...atual, { id: this.nextId++, command, output, art }]);
    }
  }

  /** Clicar na janela volta o foco ao prompt, sem atrapalhar quem seleciona texto. */
  protected focusPrompt(): void {
    if (this.document.getSelection()?.isCollapsed !== false) this.prompt()?.nativeElement.focus();
  }

  protected closeOnBackdrop(event: Event): void {
    if (event.target === event.currentTarget) this.close();
  }

  private reboot(): void {
    this.panic.set(false);
    this.entries.set(this.welcome());
  }

  private welcome(): Entry[] {
    return [{ id: this.nextId++, output: WELCOME }];
  }
}
