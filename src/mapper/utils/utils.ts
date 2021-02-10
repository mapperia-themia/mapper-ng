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

  public static showElement(element): void {
    element.style.display = '';
  }

  public static insertAfter(element1, element2): void {
    element2.parentNode.insertBefore(element1, element2.nextSibling);
  }

  public static insertBefore(element1, element2): void {
    element2.parentNode.insertBefore(element1, element2);
  }

  public static redirectPage(url: string): void {
    location.href = url;
  }

  public static refreshCurrentPage(): void {
    location.reload();
  }

  public static scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  public static scrollTo(x, y): void {
    window.scrollTo(x, y);
  }

  public static isFunction(value): boolean {
    return ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(value));
  }

  public static isAsyncFunction(value): boolean {
    return Object.prototype.toString.call(value) === '[object AsyncFunction]';
  }

  public static celsiusToFahrenheit(celsius: number): number {
    return celsius * 9 / 5 + 32;
  }

  public static fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }

  public static convertCookieToObject(): void {
    document.cookie.split(';').map(item => item.split('=')).reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});
  }

  public static hexToRgb(hex: string): number[] {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  }

  public static rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  public static queryParamsToObject(params: string): any {
    // @ts-ignore
    return Array.from(new URLSearchParams(params)).reduce((p, [k, v]) => Object.assign({}, p, {[k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v}), {});
  }

  public static decodeJWT(token: string): any {
    return decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/')).split('').map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`).join(''));
  }

  public static isDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public static getType(obj): any {
    return Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
  }

  public static redirectToHttps(): any {
    return (location.protocol === 'https:') ? {} : (location.protocol = 'https:');
  }

  // Numbers
  public static getOrdinalSuffixOfNumber(number: number): string {
    return `${number}${['st', 'nd', 'rd'][((number + 90) % 100 - 10) % 10 - 1] || 'th'}`;
  }

  public static getNumberPrefixedByZero(number: number, length: number): string {
    return (number / Math.pow(10, length)).toFixed(length).substr(2);
  }

  // Objects
  public static isObjectsAreEqual(...objects): boolean {
    return objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));
  }

  public static getRandomHexColor(): string {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
  }

  // Strings
  public static capitalizeString(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

  public static getUrlSlagFromString(str: string): void {
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  }

  public static convertWindowsPathToUnixPath(path: string): void {
    path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
  }

  public static getExtension(fileName: string): void {
    fileName.split('.').pop();
  }

  public static normalizePath(path: string): void {
    path.replace(/[\\/]+/g, '/');
  }

  // Validator
  public static isDateBetweenTwoOtherDate(date: Date, minDate: Date, maxDate: Date): boolean {
    return (date.getTime() >= minDate.getTime() && date.getTime() <= maxDate.getTime());
  }

  public static isToday(date: Date): boolean {
    return date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
  }

  public static isPrime(num: number): boolean {
    return (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);
  }

  public static isNotPrime(num: number): boolean {
    return !this.isPrime(num);
  }

  public static isEven(n: number): boolean {
    return (n % 2 === 0);
  }

  public static isOdd(n: number): boolean {
    return !this.isEven(n);
  }

  public static isNumberInGivenRange(num: number, a: number, b: number): boolean {
    return (Math.min(a, b) <= num && num < Math.max(a, b));
  }

  public static isNegative(n: number): boolean {
    return n < 0;
  }

  public static isPositive(n: number): boolean {
    return !this.isNegative(n);
  }

  public static isContainsLowerCase(str: string): boolean {
    return str !== str.toUpperCase();
  }

  public static isContainsWhitespace(str: string): boolean {
    return /\s/.test(str);
  }

  public static isHexDecimal(str: string): boolean {
    return /^[A-F0-9]+$/i.test(str);
  }

  public static isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  public static isPlainObject(v: any): boolean {
    return (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));
  }

  public static isLeapYear(year: number): boolean {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
  }

}
