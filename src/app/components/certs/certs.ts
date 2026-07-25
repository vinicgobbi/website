import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Cert } from '../../shared/interfaces/cert';
import { CertsService } from '../../services/certs-service';

@Component({
  selector: 'app-certs',
  imports: [],
  templateUrl: './certs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './certs.scss',
})
export class Certs {
  certs: Cert[] = [];

  constructor(private certService: CertsService) { }

  ngOnInit(): void {
    this.certService.getCerts().subscribe(data => {
      this.certs = data;
    })
  }

  codigoCopiado: string | null = null;

  copiarCodigo(codigo: string | undefined) {
    if (!codigo) return;

    navigator.clipboard.writeText(codigo).then(() => {
      this.codigoCopiado = codigo;

      setTimeout(() => {
        if (this.codigoCopiado === codigo) {
          this.codigoCopiado = null;
        }
      }, 2000);
    });
  }
}
