import {Address} from './Address';
import {ContactNumber} from './ContactNumber';
import {User} from './User';
import {Base} from './Base';

export interface Organization extends Base {
  id: number;
  logo: string;
  slogan: string;
  establishedOn: Date;
  employeeCount?: number;
  employees?: User[];
  website: string;
  address: Address;
  contactNumber: ContactNumber[];
}
