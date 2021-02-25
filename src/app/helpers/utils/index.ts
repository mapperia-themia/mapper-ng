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

  public static isEmptyArray(array: any[]): boolean {
    return !Array.isArray(array) || array.length === 0;
  }

  public static getActiveElement(): Element {
    return document.activeElement;
  }

  public static isAllElementsLoaded(): boolean {
    let loaded = false;
    document.addEventListener('DOMContentLoaded', () => {
      loaded = true;
    });
    return loaded;
  }

  public static replaceAllUnloadedImageWithDefaultImage(defaultImageSource: string): void {
    const allImages = document.getElementsByTagName('img');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].src = defaultImageSource;
      allImages[i].alt = 'Image is not set';
    }
  }

  public static emptyArrayByKeepingReference(array: any[]): void {
    if (!this.isEmptyArray(array)) {
      try {
        array = [];
      } catch (e) {
        console.log(e);
      }
    } else {
      throw new Error('Array is already empty');
    }
  }

  public static emptyArrayAndReturnRemovedItems(array: any[]): any[] {
    return array.splice(0, array.length);
  }

  public static removeArrayByNotKeepingReference(array: any[]): void {
    array.length = 0;
  }

  public static removePropertyFromObject(object: any, property: string, forever: boolean = false): void {
    if (forever) {
      this.removePropertyFromObjectForever(object, property);
    } else {
      object[property] = undefined;
    }
  }

  public static removePropertyFromObjectForever(object: any, property: string): void {
    delete object[property];
  }

  public static deleteFromArrayByIndex(array: any[], fromIndexToDelete: number, deleteCount: number = 1): void {
    array.splice(fromIndexToDelete, deleteCount);
  }

  public static deleteFromArrayByIndexAndReturn(array: any[], fromIndexToDelete: number, deleteCount: number = 1): any[] {
    return array.splice(fromIndexToDelete, deleteCount);
  }
}
