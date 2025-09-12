import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderService } from '../../core/services/page-header';
import { MaterialModule } from '../../modules/material-module';
import { getCorPorTempo } from '../../utils/cor-por-tempo.util';
import { interval, Subscription } from 'rxjs';
import { formatarTempo } from '../../utils/formata-tempo.util';
import { Router } from '@angular/router';

export interface Ocorrencia {
  id: string;
  status: string;
  segundosAtuais: number;
  tempoFormatado: string;
}

@Component({
  selector: 'app-lista-ocorrencia',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.scss']
})
export class ListaOcorrenciaComponent implements OnInit, OnDestroy {

  ocorrencias: Ocorrencia[] = [];
  private timerSubscription?: Subscription;
  public getCorPorTempo = getCorPorTempo;

  constructor(
    private pageHeaderService: PageHeaderService,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Atualiza o cabeçalho na próxima iteração do loop de eventos
    // para evitar ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.pageHeaderService.setHeader(['Lista de Ocorrências']));

    this.carregarOcorrencias();
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  // Método de simulação para carregar dados
  private carregarOcorrencias(): void {
    // No mundo real, estes dados viriam de uma API
    this.ocorrencias = [
      { id: '2025-AAAAAAAAA-123', status: 'Em andamento', segundosAtuais: 2772, tempoFormatado: formatarTempo(2772) }, // ~46 min
      { id: '2025-BBBBBBBBB-123', status: 'Em andamento', segundosAtuais: 2022, tempoFormatado: formatarTempo(2022) }, // ~22 min
      { id: '2025-CCCCCCCCC-125', status: 'Em andamento', segundosAtuais: 755,  tempoFormatado: formatarTempo(755) },  // ~12 min
    ];
  }

  private startTimer(): void {
    // roda fora da zona para evitar gatilhos desnecessários de change detection
      this.timerSubscription = interval(1000).subscribe(() => this.ngZone.run(() => this.tick()));
  }

  private stopTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = undefined;
  }

  private tick(): void {
    // atualiza somente campos internos dos objetos (não reatribui a array)
    this.ocorrencias.forEach(o => {
      o.segundosAtuais++;
      o.tempoFormatado = formatarTempo(o.segundosAtuais);
    });
    // marca para checagem; mais seguro que detectChanges dentro de hooks
    this.cdr.markForCheck();
  }

  // Navega para a tela de detalhes (fila de espera)
  verDetalhes(ocorrencia: Ocorrencia): void {
    // Você pode passar o ID da ocorrência na rota
    this.router.navigate(['/fila-espera']);
    console.log('Navegando para detalhes da ocorrência:', ocorrencia.id);
  }

}