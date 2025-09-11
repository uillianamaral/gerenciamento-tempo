import { Routes } from '@angular/router';
import { MenuComponent } from './core/layout/menu/menu.component';
import { GerenciamentoTempo } from './views/gerenciamento-tempo/gerenciamento-tempo';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'registro',
        component: GerenciamentoTempo
      },
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      }
    ]
  },
];