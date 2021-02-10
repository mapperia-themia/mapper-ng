import {Role} from '../models/Role';

export const roles: Role[] = [
  {
    id: 1,
    name: 'admin',
    permissions: {
      canCreate: true,
      canDelete: true,
      canDisable: true,
      canModify: true,
      canView: true
    }
  }
];
