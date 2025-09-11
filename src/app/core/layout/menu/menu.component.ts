import { Component, OnInit } from '@angular/core';
import { UserRole, UsuarioService } from '../../services/usuario';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../modules/material-module';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PageHeaderService } from '../../services/page-header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-component', 
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  isDispositivoMovel: Observable<boolean>;
  usuarioLogado: UserRole = null;
  cabecalhoPagina: string[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private usuarioService: UsuarioService,
    private pageHeaderService: PageHeaderService
  ) {
    this.isDispositivoMovel = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  ngOnInit(): void {
    this.usuarioService.usuarioAtual$.subscribe(role => this.usuarioLogado = role);
    this.pageHeaderService.currentHeaderTitle$.subscribe(title => this.cabecalhoPagina = title);
  }
}