export class DOM {
  public static toggleClass(element: HTMLElement, className: string): void {
    element.classList.toggle(className);
  }
}
