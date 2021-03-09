export class Account {
  /**
   * @description Account Name
   * */
  name: string;

  /**
   * @summary Account Currency
   * @description Forces all moves for this account to have this account currency.
   * */
  currencyId?: number;

  /**
   *
   * */
  code: string;

  /**
   *
   * */
  deprecated?: boolean;

  /**
   *
   * */
  used?: boolean;

  /**
   * @summary Type
   * @description Account Type is used for information purpose, to generate country-specific legal reports, and set the rules to close a fiscal year and generate opening entries.
   * */
  userTypeId: number;

  /**
   * @link userTypeId.type
   * */
  internalType?: any;

  /**
   * @link userTypeId.internalGroup
   * */
  internalGroup?: any;


  /**
   * @summary Allow Reconciliation
   * @description Check this box if this account allows invoices & payments matching of journal items.
   * */
  reconcile: boolean = false;

  /**
   * @description Default Taxes
   * */
  taxIds: number[];

  /**
   * @description Internal Notes
   * */
  note?: string;

  /**
   * @description Company
   * */
  companyId: number;

  /**
   * @summary Tags
   * @description Optional tags you may want to assign for custom reporting
   * */
  tagIds?: number[];

  /**
   *
   * */
  groupId?: number;

  /**
   *
   * */
  rootId?: number;

  /**
   * @summary Allowed Journals
   * @description Define in which journals this account can be used. If empty, can be used in all journals.
   * */
  allowedJournalIds?: number;

  /**
   * @description Opening debit value for this account.
   * */
  openingDebit?: number;

  /**
   * @description Opening credit value for this account.
   * */
  openingCredit?: number;

  /**
   * @description Opening balance value for this account.
   * */
  openingBalance?: number;

  /**
   *
   * */
  isOffBalance: boolean = false;

}
