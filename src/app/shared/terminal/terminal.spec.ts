import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terminal } from './terminal';
import { completeCommand, runCommand } from './terminal-commands';

describe('runCommand', () => {
  it('avisa quando o comando não existe, inclusive nomes herdados de Object', () => {
    expect(runCommand('foo').output[0]).toContain('foo: comando não encontrado');
    expect(runCommand('constructor').output[0]).toContain('comando não encontrado');
  });

  it('não faz nada com a linha vazia', () => {
    expect(runCommand('   ')).toEqual({ output: [] });
  });

  it('lê arquivos e diretórios sem cair em chaves herdadas', () => {
    expect(runCommand('cat contato.txt').output.join()).toContain('@gmail.com');
    expect(runCommand('cat projetos/').output[0]).toContain('É um diretório');
    expect(runCommand('ls -la projetos/').output).toContain('Deploy Tools');
    expect(runCommand('cat constructor').output[0]).toContain('inexistente');
    expect(runCommand('ls constructor').output[0]).toContain('inexistente');
  });

  it('navega só para seções que existem', () => {
    expect(runCommand('cd projetos/').goto).toBe('projetos');
    expect(runCommand('cd').goto).toBe('inicio');
    expect(runCommand('cd /etc').goto).toBeUndefined();
  });

  it('só entra em pânico com o rm -rf / completo', () => {
    expect(runCommand('sudo rm -rf /').action).toBe('panic');
    expect(runCommand('sudo   rm -fr /* --no-preserve-root').action).toBe('panic');
    expect(runCommand('sudo rm -rf /tmp').action).toBeUndefined();
    expect(runCommand('rm -rf /').action).toBeUndefined();
  });

  it('respeita o sudo no sanduíche', () => {
    expect(runCommand('make me a sandwich').output[0]).toBe('Faça você mesmo.');
    expect(runCommand('sudo make me a sandwich').output[0]).toContain('Ok.');
  });
});

describe('completeCommand', () => {
  it('completa só quando há um único candidato', () => {
    expect(completeCommand('neo')).toBe('neofetch ');
    expect(completeCommand('c')).toBe('c');
    expect(completeCommand('')).toBe('');
  });
});

describe('Terminal', () => {
  let fixture: ComponentFixture<Terminal>;
  let el: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Terminal);
    el = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  function type(text: string, target: EventTarget = document): void {
    for (const key of text) {
      target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    }
    fixture.detectChanges();
  }

  function run(command: string): void {
    const input = el.querySelector<HTMLInputElement>('.prompt')!;
    input.value = command;
    input.form!.dispatchEvent(new Event('submit', { cancelable: true }));
    fixture.detectChanges();
  }

  it('abre ao digitar sudo na página, focando o prompt', async () => {
    expect(el.querySelector('.window')).toBeNull();
    type('sudo');
    expect(el.querySelector('.window')).not.toBeNull();
    await fixture.whenStable();
    expect(document.activeElement).toBe(el.querySelector('.prompt'));
  });

  it('não abre com sudo digitado num campo de texto', () => {
    const field = document.body.appendChild(document.createElement('input'));
    type('sudo', field);
    field.remove();
    expect(el.querySelector('.window')).toBeNull();
  });

  it('fecha com Esc', () => {
    type('sudo');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(el.querySelector('.window')).toBeNull();
  });

  it('mostra a saída dos comandos e limpa com clear', () => {
    type('sudo');
    run('echo oi <b>mundo</b>');
    expect(el.querySelector('.screen')?.textContent).toContain('oi <b>mundo</b>');
    run('clear');
    expect(el.querySelector('.output')).toBeNull();
  });

  it('volta do kernel panic depois de reiniciar', () => {
    vi.useFakeTimers();
    try {
      type('sudo');
      run('sudo rm -rf /');
      expect(el.querySelector('.panic')).not.toBeNull();
      expect(el.querySelector('.window')).toBeNull();
      vi.runAllTimers();
      fixture.detectChanges();
      expect(el.querySelector('.panic')).toBeNull();
    } finally {
      vi.useRealTimers();
    }
  });
});
