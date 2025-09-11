import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.scss'
})
export class PaginaPrincipal implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit(): void {
    // Define o cabeçalho da página
    setTimeout(() => {
      this.pageHeaderService.setHeader(['Página Inicial']);
    });
  }
}