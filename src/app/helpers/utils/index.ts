export class Utils {

  public isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  public isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i.test(navigator.userAgent);
  public isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

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

  public static addClassToElement(element: Element, classList: string[]): void {
    classList.forEach(c => {
      element.classList.add(c);
    });
  }

  public static removeClassFromElement(element: Element, classList: string[]): void {
    classList.forEach(c => {
      element.classList.remove(c);
    });
  }

  public static toggleClassListInElement(element: Element, classList: string[]): void {
    classList.forEach(c => {
      element.classList.toggle(c);
    });
  }

  public static appendElementToTargetElement(targetElement: Element, element: Element): void {
    targetElement.appendChild(element);
  }

  public static setFavicon(url: string): void {
    const favicon: HTMLLinkElement = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = url;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = url;
      document.head.appendChild(link);
    }
  }

  public static hasClassInElement(className: string, element: Element): void {
    element.classList.contains(className);
  }

  public static isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  public static isTouchSupported(): boolean {
    return 'ontouchstart' in window;
  }

  public static makeCloneOfNode(element: Node | Element): Node | Element {
    return element.cloneNode(true);
  }

  public static copyTextToClipboard(text: string): void {
    const textAreaEle = document.createElement('textarea');
    textAreaEle.style.border = '0';
    textAreaEle.style.padding = '0';
    textAreaEle.style.margin = '0';
    textAreaEle.style.position = 'absolute';
    textAreaEle.style.left = '-9999px';
    textAreaEle.style.top = `0px`;
    textAreaEle.value = text;
    document.body.appendChild(textAreaEle);
    textAreaEle.focus();
    textAreaEle.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.log('Unable to copy');
    } finally {
      document.body.removeChild(textAreaEle);
    }
  }

  public static getSelectedText(): string {
    return window.getSelection().toString();
  }

  public static copySelectedTextToClipboard(): void {
    this.copyTextToClipboard(this.getSelectedText());
  }

  public static isClickedOutsideOfElement(element: any): boolean {
    let isClickedOutside = false;
    document.addEventListener('click', evt => {
      isClickedOutside = !element.contains(evt.target);
    });
    return isClickedOutside;
  }

  public static uploadFileToServer(fileElementId: string, backendUrl: string): Promise<unknown> {
    const fileEle = document.getElementById(fileElementId) as HTMLInputElement;
    return new Promise((resolve, reject) => {
      const files = fileEle.files;
      const formData = new FormData();
      [].forEach.call(files, (file) => {
        formData.append(fileEle.name, file, file.name);
      });
      const req = new XMLHttpRequest();
      req.open('POST', backendUrl, true);
      req.onload = () => {
        if (req.status >= 200 && req.status < 400) {
          resolve(req.responseText);
        }
      };
      req.onerror = () => {
        reject();
      };
      req.send(formData);
    });
  }

  public static getLocalFileUrl(inputElementId: string): string[] {
    const fileEle = document.getElementById(inputElementId) as HTMLInputElement;
    const urls: string[] = [];

    fileEle.addEventListener('change', (e) => {
      const files = fileEle.files;
      for (let i = 0; i < files.length; i++) {
        urls.push(URL.createObjectURL(files[i]));
      }
    });
    return urls;
  }

}
