import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Permission} from './Permission';
import {Base} from './Base';

export interface Menu extends Base {
  id: number;
  name: string;
  url: string;
  logo: string;
  icon: IconProp;
  permission: Permission;
  children: Menu[];
}
