export class Utils {
  // One liner
  static isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  static cookies = document.cookie.split(';').map(item => item.split('=')).reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});

  static isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // array
  static filterArrayByString(mainArray: any[], searchKey: string): any[] {
    if (searchKey === '') {
      return mainArray;
    }

    searchKey = searchKey.toLowerCase();

    return mainArray.filter((itemObj) => {
      return this.searchInObj(itemObj, searchKey);
    });
  }

  static searchInObj(itemObj: any, searchText: string): boolean {
    for (const prop in itemObj) {
      if (!itemObj.hasOwnProperty(prop)) {
        continue;
      }

      const value = itemObj[prop];

      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true;
        }
      } else if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }
  }

  static searchInArray(array: any[], searchText: string): boolean {
    for (const value of array) {
      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }
    return false;
  }

  static searchInString(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText);
  }

  static isArrayEmpty = (array: any[]): boolean => !Array.isArray(array) || array.length === 0;

  static clonedArray = (array: any[]): boolean => JSON.parse(JSON.stringify(array));

  static isArrayEqual = (array1: any[], array2: any[]): boolean => JSON.stringify(array1) === JSON.stringify(array2);

  static convertArrayOfObjectToSingleObject = (array: any[], key: string): any => array.reduce((a, b) => ({...a, [b[key]]: b}), {});

  static countValueOfObjectByProp = (arr: any[], prop: string): any => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});

  static accumulateArray = (arr: any[]): number[] => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);

  static summationOfArray(array: any[]): number {
    return this.accumulateArray(array)[this.accumulateArray(array).length - 1];
  }

  static findMaxValueOfObject = (array: any[], key: string): any => array.reduce((a, b) => a[key] >= b[key] ? a : b, {});

  static findMinValueOfObject = (array: any[], key: string): any => array.reduce((a, b) => a[key] < b[key] ? a : b, {});

  static getNthItemsFromArray = (arr: any[], nth: number): any[] => arr.filter((_, i) => i % nth === nth - 1);

  static groupObjectByKey = (arr: any[], key: string): any => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

  static sortArrayByGivenKey = (arr: any[], k: string): any[] => arr.concat().sort((a, b) => (a[k] > b[k]) ? 1 : ((a[k] < b[k]) ? -1 : 0));

  // date time
  static suffixAmPm = (h: number): string => Array(24).fill(0).map((_, i) => `${i % 12 === 0 ? 12 : i % 12}${i < 12 ? 'am' : 'pm'}`)[h];

  static differenceBetweenDays = (date: Date, otherDate: Date): number => {
    // @ts-ignore
    return Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
  };

  static differenceBetweenDaysInMonth = (startDate, endDate): number => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

  static isDateGreaterThanOther = (a: Date, b: Date): boolean => a.getTime() > b.getTime();

  static formatDateByLocale = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);

  // DOM
  static isDescendant = (child: Element, parent: Element): boolean => parent.contains(child);

  static hasFocus = (ele: Element): boolean => ele === document.activeElement;

  static getSelectedText = (): string => window.getSelection().toString();

  static celsiusToFahrenheit: (celsius: number) => number = (celsius: number) => celsius * 9 / 5 + 32;

  static fahrenheitToCelsius: (fahrenheit: number) => number = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;

  static decodeJWTToken: (token: string) => string = (token: string) => decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/')).split('').map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`).join(''));

  // Number
  static addOrdinalToNumber: (n: number) => string = (n: number) => `${n}${{
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th'
  }[new Intl.PluralRules('en', {type: 'ordinal'}).select(n)]}`;


  // object
  static isObjectsAreEqual: (...objects: any[]) => boolean = (...objects: any[]) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));

  static pluckValueByProp: (objs: any[], property: string) => any[] = (objs: any[], property: string) => objs.map(obj => obj[property]);

  static getValueFromGivenPath: (path: string, obj: any) => string = (path: string, obj: any) => path.split('.').reduce((acc, c) => acc && acc[c], obj);

  static invertKeysAndValues: (obj: any) => unknown = (obj: any) => Object.keys(obj).reduce((res, k) => Object.assign(res, {[obj[k]]: k}), {});

  // string
  static randomColor: () => string = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

  static isAbsoluteUrl = (url: string) => /^[a-z][a-z0-9+.-]*:/.test(url);

  static slugify = (str: string) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  static getFileExtension = (fileName: string) => fileName.split('.').pop();

  static getFileNameWithExtension = (url: string) => url.substring(url.lastIndexOf('/') + 1);

  static getFileName = (fileName: string) => fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');

  static maskFirstNDigit = (str: string, num: number, mask: string) => `${str}`.slice(num).padStart(`${str}`.length, mask);

  static truncate = (str: string, max: number, suffix: string) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

  // validator
  static isBetween = (date: Date, min: Date, max: Date) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());

  static isToday = (date: Date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);

  static isPrime = (num: number) => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);

  static isEven = (n: number) => Number.isInteger(n / 2);

  static inRange = (num: number, a: number, b: number) => (Math.min(a, b) <= num && num < Math.max(a, b));

  static isNegative = (n: number) => n < 0;

  static isHexColor = (color: string) => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

  static isNumber = value => !isNaN(parseFloat(value)) && isFinite(value);

  static isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));

  static isNil = (value) => value == null;

  static isLeapYear = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));

  static isEmptyObject = obj => JSON.stringify(obj) === '{}';

  static isValidDate = (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= (new Date(y, m, 0)).getDate();

  // Document
  static toggleClassList(ele: Element, className: string): void {
    ele.classList.toggle(className);
  }

  static appendElement(target: Element, child: Element) {
    target.appendChild(child);
  }

  static getMousePositionFromElement(ele: Element, $event: MouseEvent): { x: number; y: number } {
    const rect = ele.getBoundingClientRect();
    const x = $event.clientX - rect.left;
    const y = $event.clientY - rect.top;
    return {x, y};
  }

  static setFavicon = (url: string) => {
    const favicon: HTMLLinkElement = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = url;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = url;
      document.head.appendChild(link);
    }
  };

  static getElementsHavingClass = (ele: Element, className: string) => ele.classList.contains(className);

  static clonedElement = (ele: Element) => ele.cloneNode(true);
}
