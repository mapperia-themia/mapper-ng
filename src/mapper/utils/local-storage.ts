export class LocalStorage {
  /**
   * @param key - The key for saving data to local storage
   * @param value - The value which will be saved in local storage
   */
  public static saveToLocalStorage(key: string, value: string): void {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  /**
   * @param key - The key for getting data from local storage
   */
  public static getFromLocalStorage(key: string): string | null {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }
}
