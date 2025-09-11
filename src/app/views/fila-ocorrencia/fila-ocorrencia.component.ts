import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header';
import { MaterialModule } from '../../modules/material-module';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-fila-ocorrencia',
  imports: [MaterialModule],
  templateUrl: './fila-ocorrencia.component.html',
  styleUrl: './fila-ocorrencia.component.scss'
})
export class FilaOcorrenciaComponent implements OnInit {

  // --- DADOS SIMULADOS ---
  posicaoFila = 12;
  private segundosTotaisEspera = 728;

  // --- Propriedades do Componente ---
  tempoEsperaFormatado = '00:12:08';
  // Substituímos o 'any' por uma Subscription do RxJS para um controle mais seguro
  private timerSubscription!: Subscription;

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit(): void {
    // Define o cabeçalho da página
    setTimeout(() => {
      this.pageHeaderService.setHeader(['Controle de Fila', 'Posição Atual']);
    });

    // Inicia o cronômetro usando o timer do RxJS
    // O primeiro argumento (0) diz para começar imediatamente.
    // O segundo (1000) diz para repetir a cada 1000ms (1 segundo).
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      this.segundosTotaisEspera++;
      this.tempoEsperaFormatado = this.formatarTempo(this.segundosTotaisEspera);
    });
  }

  ngOnDestroy(): void {
    // Cancela a inscrição no timer quando o componente é destruído
    // Isso é crucial para evitar vazamentos de memória
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private formatarTempo(totalSegundos: number): string {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
  }

}