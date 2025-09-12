import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material-module';
import { CommonModule } from '@angular/common';
import { PageHeaderService } from '../../core/services/page-header';

@Component({
  selector: 'app-painel-controle-component',
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './painel-controle-component.html',
  styleUrl: './painel-controle-component.scss'
})
export class PainelControleComponent implements OnInit {

  constructor(
    private pageHeaderService: PageHeaderService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.pageHeaderService.setHeader(['Lista de Ocorrências']));

  }

}
