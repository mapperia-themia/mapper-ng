import {Component, EventEmitter, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PdfJsViewerComponent} from 'ng2-pdfjs-viewer';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  btns: any[] = [];

  @Input() src: string = 'http://www.africau.edu/images/default/sample.pdf';
  @Input() viewerId: string = '';

  @ViewChild('pdfViewer') pdfViewer: PdfJsViewerComponent;
  @ViewChild('exportBtn') exportBtn: ElementRef;

  @Output() buttonClicked = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.btns = [
      {
        id: 1,
        name: 'excel',
        icon: 'https://s2.svgbox.net/files.svg?ic=excel2'
      },
      {
        id: 2,
        name: 'img',
        icon: 'https://s2.svgbox.net/files.svg?ic=image'
      },
      {
        id: 3,
        name: 'word',
        icon: 'https://s2.svgbox.net/files.svg?ic=word2'
      }
    ];
  }

  onDocumentLoad($event: any): void {
    const application = this.pdfViewer.PDFViewerApplication;
    const toolbar = application.toolbar;
    const toolbarContent = toolbar.items;
    const rightToolbar = toolbarContent.container.children[1];
    rightToolbar.style.padding = '0 10px';
    rightToolbar.appendChild(this.exportBtn.nativeElement);
  }

  onClickButton(btn: any): void {
    this.buttonClicked.emit(btn);

    if (btn.id === 1) {
      this.convertToExcel();
    } else if (btn.id === 2) {
      this.convertToImg();
    } else if (btn.id === 3) {
      this.convertToWord();
    }
  }

  private convertToWord(): void {
    // convert to word
  }

  private convertToExcel(): void {
    // convert to excel
  }

  private convertToImg(): void {
    // convert to img
  }
}
