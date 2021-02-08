export class Utils {

  // Arrays
  public static isArrayHasNoValue(array: any[]): boolean {
    return (!Array.isArray(array) || array.length === 0);
  }

  public static isArrayHasValue(array: any[]): boolean {
    return !this.isArrayHasNoValue(array);
  }

  public static clonedArray(array: any[]): any[] {
    return JSON.parse(JSON.stringify(array));
  }

  public static isArraysAreEqual(array1: any[], array2: any[]): boolean {
    return JSON.stringify(array1.sort()) === JSON.stringify(array2.sort());
  }

  public static isArraysAreExactEqual(array1: any[], array2: any[]): boolean {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  public static convertArrayOfStringToArrayOfNumber(array: string[]): number[] {
    return array.map(Number);
  }

  public static countObjectByKeyInArray(array: any[], key: string): any {
    return array.reduce((prev, curr) => (prev[curr[key]] = ++prev[curr[key]] || 1, prev), {});
  }

  public static countOccurrencesInArray(array: any[], value): number {
    return array.reduce((a, v) => (v === value ? a + 1 : a), 0);
  }

  public static makeArrayEmpty(array: any[]): number {
    return array.length = 0;
  }

  public static getLengthOfLongestStringInArray(array: string[]): number {
    return Math.max(...(array.map(el => el.length)));
  }

  public static getMaximumValueOfKeyInArray(array: any[], key: string): any {
    return array.reduce((a, b) => a[key] >= b[key] ? a : b, {});
  }

  public static getMinimumValueOfKeyInArray(array: any[], key: string): any {
    return array.reduce((a, b) => a[key] < b[key] ? a : b, {});
  }

  public static getMaximumValueInArray(array: any[]): any {
    return Math.max(...array);
  }

  public static getMinimumValueInArray(array: any[]): any {
    return Math.min(...array);
  }

  public static getOneArrayFromNested(array: any[]): any {
    return [].concat.apply([], array.map(a => Array.isArray(a) ? this.getOneArrayFromNested(a) : a));
  }

  public static getAverageInArray(array: number[]): number {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }

  public static getCommonValuesInArrays(array: any[], ...arrays): any[] {
    return [...new Set(array)].filter(v => arrays.every(b => b.includes(v)));
  }

  public static getSumOfArray(array: number[]): number {
    return array.reduce((a, b) => a + b, 0);
  }

  public static getUniqueValuesInArray(array: any[]): any[] {
    return [...new Set(array)];
  }

  public static groupArrayOfObjectByKey(array, key): any {
    return array.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
  }

  public static mergeArray(array1: any[], array2: any[], removeDuplicate: boolean = true): any[] {
    if (removeDuplicate) {
      return [...new Set([...array1, ...array2])];
    } else {
      return [...array1, ...array2];
    }
  }

  public static partitionArrayByCondition(array: any[], condition: any): any[] {
    return array.reduce((acc, i) => (acc[condition(i) ? 0 : 1].push(i), acc), [[], []]);
  }

  public static sortArrayOfObjectByKey(array: any[], key: string): any[] {
    return array.concat().sort((a, b) => (a[key] > b[key]) ? 1 : ((a[key] < b[key]) ? -1 : 0));
  }

  public static sortArrayOfNumbers(array: number[]): number[] {
    return array.sort((a, b) => a - b);
  }

  public static splitArrayIntoChunks(array: any[], size: number): any[] {
    return array.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
  }


  // Date and Time
  public static getDifferenceOfDays(startDate: any, endDate: any): number {
    return Math.ceil(Math.abs(startDate - endDate) / (1000 * 60 * 60 * 24));
  }

  public static getDifferenceOfMonths(startDate: any, endDate: any): number {
    return Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
  }

  public static compareTwoDates(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
  }

  public static convertSecondsToHHMMSS(seconds: number): any {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

  public static extractDate(date: Date): any[] {
    return date.toISOString().split(/[^0-9]/).slice(0, -1);
  }

  public static formatDateToLocale(date: Date, locale: string): any {
    return new Intl.DateTimeFormat(locale).format(date);
  }

  public static getCurrentTimestampInSeconds(): number {
    return Math.floor(new Date().getTime() / 1000);
  }

  public static getDayNumberInCurrentYear(date: Date): number {
    // @ts-ignore
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  }

  public static getMonthNameOfDate(date: Date): string {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
  }

  public static getDayNumberInMonth(month, year): number {
    return new Date(year, month, 0).getDate();
  }

  public static getTomorrow(): Date {
    return new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24);
  }

  public static getYesterday(): Date {
    return new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);
  }

  public static getWeekOfDay(date: Date): string {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  }

  // DOM
  public static isElementDescendant(child: any, parent: any): any {
    return parent.contains(child);
  }

  public static isElementInFocus(element): boolean {
    return element === document.activeElement;
  }

  public static isTouchScreen(): boolean {
    // @ts-ignore
    return ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
  }

  public static isIE(): boolean {
    // @ts-ignore
    return !!document.documentMode;
  }

  public static isMac(): boolean {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  }

  public static getSiblings(element): any {
    return [].slice.call(element.parentNode.children).filter((child) => (child !== element));
  }

  public static getSelectedText(): string {
    return window.getSelection().toString();
  }

  public static goToPreviousPage(): void {
    history.back();
  }

  public static goToNthBackPage(n: number): void {
    history.go(n * -1);
  }

  public static hideElement(element): void {
    element.style.display = 'none';
  }

}
