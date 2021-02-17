export class Utils {
  /**
   * Filter array by string
   *
   * @returns {any}
   * @param mainArray
   * @param searchKey
   */
  public static filterArrayByString(mainArray: any[], searchKey: string): any[] {
    if (searchKey === '') {
      return mainArray;
    }

    searchKey = searchKey.toLowerCase();

    return mainArray.filter((itemObj) => {
      return this.searchInObj(itemObj, searchKey);
    });
  }

  /**
   * Search in object
   *
   * @param itemObj
   * @param searchText
   * @returns {boolean}
   */
  public static searchInObj(itemObj: any, searchText: string): boolean {
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

  /**
   * Search in array
   *
   * @param array
   * @param searchText
   * @returns {boolean}
   */
  public static searchInArray(array: any[], searchText: string): boolean {
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

  /**
   * Search in string
   *
   * @param value
   * @param searchText
   * @returns {any}
   */
  public static searchInString(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText);
  }

  /**
   * Toggle in array
   *
   * @param item
   * @param array
   */
  public static toggleInArray(item: any, array: any[]): void {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }
}
