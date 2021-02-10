import {Menu} from '../models/Menu';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';

export const menus: Menu[] = [
  {
    url: '/organization/create',
    name: 'New Organization',
    children: [],
    icon: faBuilding,
    id: 1,
    logo: '',
    permission: {
      canView: true,
      canModify: false,
      canDisable: false,
      canDelete: false,
      canCreate: true
    }
  }
];
