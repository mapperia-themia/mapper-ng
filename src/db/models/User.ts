import {Base} from './Base';
import {Address} from './Address';
import {ContactNumber} from './ContactNumber';
import {Organization} from './Organization';
import {Menu} from './Menu';
import {Role} from './Role';

export interface User extends Base {
  id: number;
  avatar: string;
  firstName: string;
  lastName?: string;
  fullName?: string;
  email: string;
  password: string;
  username: string;
  contactNumber: ContactNumber[];
  dateOfBirth: Date;
  address: Address;
  organization: Organization;
  relatives: User[];
  connections: User[];
  emergencyContactPerson: User;
  relationToContactPerson: string;
  permittedMenus: Menu[];
  roles: Role[];
  loggedIn: boolean;
  active: boolean;
  verified: boolean;
}
