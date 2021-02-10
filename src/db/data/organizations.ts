import {Organization} from '../models/Organization';
import {addresses} from './addresses';
import {contactNumbers} from './contactNumbers';
import {users} from './users';

export const organizations: Organization[] = [
  {
    address: addresses[0],
    contactNumber: [contactNumbers[0]],
    website: 'https://aitsidea.com',
    slogan: 'no compromise on quality',
    logo: '',
    id: 1,
    establishedOn: new Date('4/12/2017'),
  }
];
