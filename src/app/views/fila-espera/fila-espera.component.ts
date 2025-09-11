import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header';
import { MaterialModule } from '../../modules/material-module';
import { Subscription, interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { formatarTempo } from '../../utils/formata-tempo.util';
import { getCorPorTempo } from '../../utils/cor-por-tempo.util';

@Component({
  selector: 'app-fila-espera',
  imports: [CommonModule, MaterialModule],
  templateUrl: './fila-espera.component.html',
  styleUrls: ['./fila-espera.component.scss']
})
export class FilaEsperaComponent implements OnInit, OnDestroy {

  posicaoFila = 12;
  private segundosTotaisEspera = 710;
  tempoEsperaFormatado = '00:12:08';
  private timerSubscription?: Subscription;

  contagemParalisada = false;
  ocorrenciaEncerrada = false;

  constructor(
    private pageHeaderService: PageHeaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.pageHeaderService.setHeader(['Fila de Espera']);
    });

    this.timerSubscription = interval(10).subscribe(() => {
      this.segundosTotaisEspera++;
      this.tempoEsperaFormatado = formatarTempo(this.segundosTotaisEspera);
      // Garante que a view seja atualizada (útil se houver ChangeDetectionStrategy.OnPush)
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    // Cancela a inscrição no timer quando o componente é destruído
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  getCorStatus(): string {
    return getCorPorTempo(
      this.segundosTotaisEspera,
      this.contagemParalisada,
      this.ocorrenciaEncerrada
    );
  }

}