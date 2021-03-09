export class AccountType {
  /**
   * @description Account type name
   * */
  name: string;

  /**
   * @description Internal notes
   * */
  description?: string;

  /**
   * @summary Bring Accounts Balance Forward
   * @description Used in reports to know if we should consider journal items from the beginning of time instead of from the fiscal year only. Account types that should be reset to zero at each new fiscal year (like expenses| revenue..) should not have this option seothert.
   * */
  includeInitialBalance?: boolean = false;

  /**
   * @description The 'Internal Type' is used for features available on different types of accounts: liquidity type is for cash or bank accounts payable/receivable is for vendor/customer accounts.
   * */
  type: 'other' | 'receivable' | 'payable' | 'liquidity' = 'other';


  /**
   * @description The 'Internal Group' is used to filter accounts based on the internal group set on the account type.
   * */
  internalGroup: 'equity' | 'asset' | 'liability' | 'income' | 'expense' | 'off_balance' = undefined;
}

