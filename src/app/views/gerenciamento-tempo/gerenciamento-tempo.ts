import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header';

@Component({
  selector: 'app-gerenciamento-tempo',
  standalone: true,
  imports: [],
  templateUrl: './gerenciamento-tempo.html',
  styleUrl: './gerenciamento-tempo.scss'
})
export class GerenciamentoTempo implements OnInit{

  constructor(private pageHeaderService: PageHeaderService) {}

 ngOnInit(): void {
  setTimeout(() => {
    this.pageHeaderService.setHeader(['Página Inicial', 'Painel de Controle']);
  });
}

}
