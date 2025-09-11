import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRole, UsuarioService } from '../../services/usuario';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../modules/material-module';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PageHeaderService } from '../../services/page-header';
import { CommonModule } from '@angular/common';
import { itensMenu, MenuItem } from './menu-item.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterOutlet, RouterModule], // Adicione RouterModule
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDispositivoMovel: Observable<boolean>;
  isMobile = false;

  usuarioLogado: UserRole = null;
  cabecalhoPagina: string[] = [];
  menuItems: MenuItem[] = [];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private usuarioService: UsuarioService,
    private pageHeaderService: PageHeaderService,
    private router: Router
  ) {
    this.isDispositivoMovel = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  ngOnInit(): void {
    this.usuarioService.usuarioAtual$.subscribe(role => {
      this.usuarioLogado = role;
      this.filterMenu();
    });

    this.pageHeaderService.currentHeaderTitle.subscribe(title => this.cabecalhoPagina = title);
    this.isDispositivoMovel.subscribe(valor => this.isMobile = valor);
  }

  onMenuItemClick(item: MenuItem): void {
    this.pageHeaderService.setHeader([item.label]);
    if (this.isMobile) {
      this.sidenav.close();
    }
  }


  filterMenu(): void {
    if (this.usuarioLogado) {

      this.menuItems = itensMenu.filter(item => 
        this.usuarioService.hasPermission(item.privileges)
      );

    } else {
      this.menuItems = [];
    }
  }

  onMenuItemClickIsMobile(): void {
    if (this.isMobile) {
      this.sidenav.close();
    }
  }

  // Adicione a função de logout para limpar o usuário
  logout(): void {
    this.usuarioService.setUsuario(null);
    this.router.navigate(['/login']); // Redireciona para uma tela de login (a ser criada)
  }
}