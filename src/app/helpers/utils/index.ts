export class Utils {

  public static filterArrayByString(mainArray: any[], searchKey: string): any[] {
    if (searchKey === '') {
      return mainArray;
    }

    searchKey = searchKey.toLowerCase();

    return mainArray.filter((itemObj) => {
      return this.searchInObj(itemObj, searchKey);
    });
  }

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

  public static searchInString(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText);
  }

  public static toggleInArray(item: any, array: any[]): void {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }
}
