import {Base} from './Base';

export interface ContactNumber extends Base {
  id: number;
  title: string;
  phoneNumber: string;
  countryCode: number;
  active: boolean;
  emergency: boolean;
}
