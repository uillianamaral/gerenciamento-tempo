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
    label: 'Fila de Espera',
    icon: 'bar_chart',
    route: '/fila-espera',
    privileges: ['PM']
  },
  {
    label: 'Lista de Ocorrências',
    icon: 'list',
    route: '/lista-ocorrencias',
    privileges: ['PM']
  },
  {
    label: 'Painel de Controle',
    icon: 'event_note',
    route: '/painel-controle',
    privileges: ['PC']
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
    privileges: ['PM']
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
    privileges: ['PM']
  }
];