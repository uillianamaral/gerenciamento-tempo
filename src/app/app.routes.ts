import { Routes } from '@angular/router';
import { MenuComponent } from './core/layout/menu/menu.component';

import { P2Component } from './views/p2/p2.component';
import { P3Component } from './views/p3/p3.component';
import { P4Component } from './views/p4/p4.component';
import { P5Component } from './views/p5/p5.component';
import { P6Component } from './views/p6/p6.component';
import { permissaoGuard } from './core/guard/permissao-guard';
import { PaginaPrincipal } from './views/pagina-principal/pagina-principal.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'pagina-principal', component: PaginaPrincipal, canActivate: [permissaoGuard], data: { roles: ['SUPERVISAO','PM','PC'] } },
      { path: 'p2', component: P2Component, canActivate: [permissaoGuard], data: { roles: ['SUPERVISAO'] } },
      { path: 'p3', component: P3Component, canActivate: [permissaoGuard], data: { roles: ['SUPERVISAO'] } },
      { path: 'p4', component: P4Component, canActivate: [permissaoGuard], data: { roles: ['PM','PC'] } },
      { path: 'p5', component: P5Component, canActivate: [permissaoGuard], data: { roles: ['PM'] } },
      { path: 'p6', component: P6Component, canActivate: [permissaoGuard], data: { roles: ['PC'] } },
      { path: '', redirectTo: 'p1', pathMatch: 'full' }
    ]
  },
];