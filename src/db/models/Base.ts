import {User} from './User';
import {Modified} from './Modified';

export class Base {
  canBeCreated?: boolean;
  createdOn?: Date = new Date();
  createdBy?: User;

  canBeModified?: boolean;
  modified?: Modified;
  modificationLog?: Modified[];

  canBeViewed?: boolean;
  lastViewedOn?: Date = new Date();
  lastViewedBy?: User;

  canBeDeleted?: boolean;
  isDeleted?: boolean;
  deletedOn?: Date;
  deletedBy?: User;

  canBeDisabled?: boolean;
  isDisabled?: boolean;
  disabledBy?: User;
}
