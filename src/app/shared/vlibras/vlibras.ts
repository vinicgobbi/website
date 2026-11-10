import { ChangeDetectionStrategy, Component, DOCUMENT, afterNextRender, inject } from '@angular/core';

export const VLIBRAS_ROOT = 'https://vlibras.gov.br/app';
export const VLIBRAS_SCRIPT = `${VLIBRAS_ROOT}/vlibras-plugin.js`;

interface VLibrasOptions {
  rootPath: string;
  avatar?: 'icaro' | 'hosana' | 'guga' | 'random';
  position?: 'L' | 'R';
}

declare global {
  interface Window {
    VLibras?: { Widget: new (options: VLibrasOptions) => unknown };
  }
}

/**
 * Widget VLibras (gov.br): traduz o conteúdo da página para Libras.
 *
 * O script é só um carregador leve: ele põe o botão na tela e o avatar 3D é
 * baixado apenas quando a pessoa clica. Não dá para fixar versão nem usar SRI,
 * porque o arquivo é servido sem versão e atualizado pelo próprio governo.
 * Se o servidor tiver CSP, libere vlibras.gov.br em script-src e frame-src, e
 * vlibras.gov.br e cdn.jsdelivr.net em font-src.
 */
@Component({
  selector: 'app-vlibras',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Vlibras {
  private readonly document = inject(DOCUMENT);

  constructor() {
    // Só no navegador: o prerender não tem window e o botão não vai para o HTML.
    afterNextRender(() => this.load());
  }

  private load(): void {
    if (this.document.querySelector(`script[src="${VLIBRAS_SCRIPT}"]`)) return;

    const script = this.document.createElement('script');
    script.async = true;
    script.src = VLIBRAS_SCRIPT;
    script.onload = () => {
      const widget = this.document.defaultView?.VLibras?.Widget;
      if (widget) new widget({ rootPath: VLIBRAS_ROOT, avatar: 'icaro', position: 'R' });
    };
    this.document.body.appendChild(script);
  }
}
