import { UserRole } from '../../services/usuario';

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  privileges: UserRole[];
}

export const itensMenu: MenuItem[] = [

  {
    label: 'Página Inicial',
    icon: 'home',
    route: '/pagina-principal',
    privileges: ['SUPERVISAO', 'PM', 'PC']
  },
  {
    label: 'P2: Relatórios',
    icon: 'bar_chart',
    route: '/p2',
    privileges: ['SUPERVISAO']
  },
  {
    label: 'P3: Gestão de Usuários',
    icon: 'people',
    route: '/p3',
    privileges: ['SUPERVISAO']
  },
  {
    label: 'P4: Registrar Ocorrência',
    icon: 'add_alert',
    route: '/p4',
    privileges: ['PM', 'PC']
  },
  {
    label: 'P5: Escalas de Serviço',
    icon: 'event_note',
    route: '/p5',
    privileges: ['PM']
  },
  {
    label: 'P6: Inquéritos',
    icon: 'gavel',
    route: '/p6',
    privileges: ['PC']
  }
];