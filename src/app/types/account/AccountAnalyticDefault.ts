export class AccountAnalyticDefault {
  /**
   * @summary Sequence
   * @description Gives the sequence order when displaying a list of analytic distribution
   * */
  sequence?: number;

  /**
   * @summary Analytic Account
   * */
  analyticId?: number;

  /**
   * @summary Analytic Tags
   * */
  analyticTagIds?: number[];

  /**
   * @summary Product
   * @description Select a product which will use analytic account specified in analytic default (e.g. create new customer invoice or Sales order if we select this product, it will automatically take this as an analytic account)
   * */
  productId?: number;

  /**
   * @summary Partner
   * @description Select a partner which will use analytic account specified in analytic default (e.g. create new customer invoice or Sales order if we select this partner, it will automatically take this as an analytic account)
   * */
  partnerId?: number;

  /**
   * @summary Account
   * @description Select an accounting account which will use analytic account specified in analytic default (e.g. create new customer invoice or Sales order if we select this account, it will automatically take this as an analytic account)
   * */
  accountId?: number;

  /**
   * @summary User
   * @description Select a user which will use analytic account specified in analytic default.
   * */
  userId?: number;

  /**
   * @summary Company
   * @description Select a company which will use analytic account specified in analytic default (e.g. create new customer invoice or Sales order if we select this company, it will automatically take this as an analytic account)
   * */
  companyId?: number;

  /**
   * @summary Start Date
   * @description Default start date for this Analytic Account.
   * */
  dateStart?: Date;

  /**
   * @summary End Date
   * @description Default end date for this Analytic Account.
   * */
  dateStop?: Date;
}
