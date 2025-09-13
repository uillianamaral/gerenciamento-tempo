import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material-module';
import { CommonModule } from '@angular/common';
import { PageHeaderService } from '../../core/services/page-header';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-painel-controle-component',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './painel-controle-component.html',
  styleUrls: ['./painel-controle-component.scss'] // corrigido
})
export class PainelControleComponent implements OnInit, AfterViewInit {

  @ViewChild('ocorrenciasCanvas', { static: false }) canvasRef?: ElementRef<HTMLCanvasElement>;
  
  public ocorrenciasChart: Chart | null = null;

  constructor(
    private pageHeaderService: PageHeaderService,
    private cdr: ChangeDetectorRef, 
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Chart.register(...registerables);
      setTimeout(() => this.pageHeaderService.setHeader(['Painel de Controle']));
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // criar o gráfico no próximo tick garante que o <canvas> esteja disponível
      setTimeout(() => {this.createChart()});
    }
  }

  createChart(): void {

    const canvas = this.canvasRef?.nativeElement ?? document.getElementById('ocorrenciasChart') as HTMLCanvasElement | null;
    if (!canvas) {
      console.error("Falha ao criar o gráfico: não foi possível encontrar o elemento canvas (id='ocorrenciasChart' ou #ocorrenciasCanvas).");
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Falha ao criar o gráfico: não foi possível obter o contexto a partir do canvas fornecido.");
      return;
    }

    const chartData = {
      labels: ['Até 30 min', 'De 30 a 45 min', 'Acima de 45 min', 'Pausadas', 'Aguardando Chegada'],
      datasets: [{
        label: 'Qtd. Ocorrências',
        data: [49, 11, 12, 9, 55],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545', '#9f9f9fff', '#b7b7b7ff'],
        borderRadius: 5,
        barThickness: 30,
      }]
    };

    this.ocorrenciasChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Ocorrências por Tempo de Espera',
            font: { size: 18, weight: 'bold' },
            padding: { bottom: 20 }
          },
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Qtd. Ocorrências' }
          }
        }
      }
    });

    // se necessário informar o Angular que algo mudou
    this.cdr.markForCheck();
  }
}