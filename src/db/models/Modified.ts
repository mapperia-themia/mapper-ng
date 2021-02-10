import {User} from './User';

export interface Modified {
  lastModifiedOn: Date;
  lastModifiedBy: User;
  isModified: boolean;
  modifiedCount: number;
}
