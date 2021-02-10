import {Base} from './Base';

export interface Country extends Base {
  id: number;
  code: number;
  name: string;
  abbr: string;
  flagUrl: string;
}
