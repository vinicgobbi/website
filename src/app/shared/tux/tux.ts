import { ChangeDetectionStrategy, Component, output } from '@angular/core';

/**
 * Tux espiando pela borda inferior da tela. A animação é só CSS, e sem movimento
 * (prefers-reduced-motion) ele fica parado no estado base, com a cabeça de fora.
 */
@Component({
  selector: 'app-tux',
  templateUrl: './tux.html',
  styleUrl: './tux.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tux {
  readonly summon = output<void>();
}
