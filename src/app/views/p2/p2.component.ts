import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header';

@Component({
  selector: 'app-p2',
  imports: [],
  templateUrl: './p2.component.html',
  styleUrl: './p2.component.scss'
})
export class P2Component implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) {}

  ngOnInit(): void {
    // Define o cabeçalho da página
    setTimeout(() => {
      this.pageHeaderService.setHeader(['Relátorios', 'Detalhes']);
    });
  }
}