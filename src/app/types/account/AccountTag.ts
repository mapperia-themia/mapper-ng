export class AccountTag {
  /**
   *
   * */
  name: string;

  /**
   *
   * */
  applicability: 'accounts' | 'taxes' = 'accounts';

  /**
   *
   * */
  color?: number;

  /**
   * @description Set active to false to hide the Account Tag without removing it.
   * */
  active: boolean = true;

  /**
   * @summary Tax Report Line
   * @description The tax report lines using this tag
   * */
  taxReportLineIds?: number[];

  /**
   * @summary Negate Tax Balance
   * @description Check this box to negate the absolute value of the balance of the lines associated with this tag in tax report computation.
   * */
  taxNegate?: boolean;

  /**
   * @summary Country
   * @description Country for which this tag is available, when applied on taxes.
   * */
  countryId?: number;
}
