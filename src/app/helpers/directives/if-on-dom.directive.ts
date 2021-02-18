import {AfterContentChecked, Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ifOnDom]'
})
export class IfOnDomDirective implements AfterContentChecked {
  private isCreated: boolean;

  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.isCreated = false;
  }

  ngAfterContentChecked(): void {
    if (document.body.contains(this.elementRef.nativeElement) && !this.isCreated) {
      setTimeout(() => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }, 300);
    } else if (this.isCreated && !document.body.contains(this.elementRef.nativeElement)) {
      this.viewContainerRef.clear();
      this.isCreated = false;
    }
  }
}
