import {Permission} from './Permission';
import {Base} from './Base';

export interface Role extends Base {
  id: number;
  name: string;
  permissions: Permission;
}
