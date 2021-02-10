import {Country} from './Country';
import {Base} from './Base';

export interface Address extends Base {
  house: number;
  street: string;
  area: string;
  city: string;
  country: Country;
  state: string;
  floor: string;
  zipCode: number;
}
