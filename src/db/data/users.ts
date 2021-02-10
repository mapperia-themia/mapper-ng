import {addresses} from './addresses';
import {contactNumbers} from './contactNumbers';
import {roles} from './roles';
import {organizations} from './organizations';
import {menus} from './menus';
import {User} from '../models/User';

export const users: User[] = [
  {
    active: true,
    id: 1,
    avatar: '',
    connections: [],
    dateOfBirth: new Date('10/7/1998'),
    verified: true,
    relatives: [],
    relationToContactPerson: '',
    loggedIn: false,
    lastName: 'Hasan',
    firstName: 'Mehedi',
    email: 'mehedi.hasansjs@gmail.com',
    emergencyContactPerson: null,
    contactNumber: [contactNumbers[0]],
    address: addresses[0],
    organization: organizations[0],
    roles: [roles[0]],
    permittedMenus: menus,
    username: 'lifeoflikhon',
    password: '123456'
  }
];
