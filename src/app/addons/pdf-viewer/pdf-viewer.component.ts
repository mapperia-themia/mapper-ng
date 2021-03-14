import {Component, EventEmitter, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PdfJsViewerComponent} from 'ng2-pdfjs-viewer';
import {IconController} from './types/IconController';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  btns: IconController[] = [];

  /**
   * extra buttons, if you need extra button to work with
   */
  @Input() extraBtns: IconController[] = [];

  /**
   * id of viewer. Needed for adding buttons
   */
  @Input() viewerId: string = 'idea8880';

  /**
   * Fully qualified path to pdf file. (For remote pdf urls over http/https, CORS should be enabled)
   */
  @Input() src: string = 'http://www.africau.edu/images/default/sample.pdf';

  /**
   * This public property exposes underlying PDFViewerApplication object.
   * Make sure to access it after document is loaded.
   * Opens up the whole world of underlying PDFJS properties and methods.
   * Use it to customize the viewer and document experience.
   */
  @Input() application?: object;

  /**
   * This public property exposes underlying PDFViewerApplicationOptions object.
   * Make sure to access it after document is loaded. Opens up the whole world of underlying PDFJS options.
   * Use it to customize the viewer and document experience.
   */
  @Input() applicationOptions?: object;

  /**
   * Set path to pdfjs's web and build folders.
   */
  @Input() folder?: string;

  /**
   * Open in new tab. Set to true to open document in a new tab
   */
  @Input() newTab?: boolean = false;

  /**
   * External window options. For allowed comma separated values, refer to https://developer.mozilla.org/en-US/docs/Web/API/Window/open
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open
   */
  @Input() newTabOptions?: string;

  /**
   * Sets/Changes the name of document to be downloaded.
   * If the file name does not ends in .pdf, the component will automatically add it for you.
   */
  @Input() name?: string;

  /**
   * Show specific page. E.g goToPage=3.
   * You may also get/set the page number from your component using '.' notation explicitly,
   * after document is loaded. E.g. myPdfViewer.page = 3;
   */
  @Input() goToPage?: number = 1;

  /**
   * Show last page of the document once it is loaded(If set to true).
   * If you use this option along with page option, undesired effects might occur
   */
  @Input() goToLastPage?: boolean = false;

  /**
   * Go to a named destination. E.g. To go to section 5.1 use like nameddest=5.1. Do not mix this option with page and lastPage options
   */
  @Input() goToSection?: string;

  /**
   * Set zoom level of document.
   * Applicable values are auto, page-width, page-height, page-fit, 200(As a zoom percentage),
   * left offset(As in "auto,18,827"), top offset(As in "auto,18,127")
   */
  @Input() zoom?: 'auto' | 'page-width' | 'page-height' | 'page-fit' | '200' = 'page-fit';

  /**
   * Show/hide print button. Set false to hide
   */
  @Input() allowPrint?: boolean = true;

  /**
   * Start print preview of document.
   * This combined with externalWindow could mimic a print preview functionality
   * just like the one in gmail.
   */
  @Input() printOnLoad?: boolean = false;

  /**
   * Show/hide search button. Set false to hide
   */
  @Input() allowSearch?: boolean = true;

  /**
   * Show/hide download button. Set false to hide
   */
  @Input() allowDownload?: boolean = true;

  /**
   * Download document as soon as it opens. You may put this to good use.
   */
  @Input() downloadOnLoad?: boolean = false;

  /**
   * Rotate document clock wise 90°
   */
  @Input() rotateRight?: boolean = false;

  /**
   * Rotate document anti-clock wise 90°
   */
  @Input() rotateLeft?: boolean = false;

  /**
   * Type of cursor. Available options are HAND/H, SELECT/S,ZOOM/Z. Case is irrelevant.
   */
  @Input() cursorType?: 'hand' | 'select' | 'zoom' = 'select';

  /**
   * Sets scroll. Available options are VERTICAL/V, HORIZONTAL/H,WRAPPED/W. Case is irrelevant.
   */
  @Input() scroll?: 'horizontal' | 'vertical' | 'wrapped' = 'vertical';

  /**
   * Sets Odd or Even spread. Available options are ODD/O, EVEN/E,NONE/N. Case is irrelevant.
   */
  @Input() spread?: 'odd' | 'even' | 'none' = 'none';

  /**
   * Show/hide presentation(full screen) button. Set false to hide
   */
  @Input() fullScreen?: boolean = true;

  /**
   * State of sidebar. Available options are none, thumbs,bookmarks,attachments. E.g. pagemode=attachments.
   */
  @Input() mode?: 'none' | 'thumbs' | 'bookmark' | 'attachments' = 'thumbs';

  /**
   * Show/hide open file button. Set false to hide
   */
  @Input() allowOpenFile?: boolean = false;

  /**
   * Show/hide bookmark button. Set false to hide
   */
  @Input() allowBookmark?: boolean = false;

  /**
   * Show a simple css based spinner/progress before the document loads
   */
  @Input() spinner?: boolean = true;

  /**
   * Set locale(language) of toolbar/buttons and other viewer elements. E.g. 'de-AT', 'en-GB' etc
   */
  @Input() i18n?: string = 'en-BD';

  /**
   * Instructs the viewer to use css based zoom. This will produce better zoom effect on mobile devices and tablets.
   */
  @Input() cssZoom?: boolean = true;

  /**
   * Custom error message
   */
  @Input() error?: string;

  /**
   * Appends custom error message to the end of other pdfjs error messages
   */
  @Input() appendedError?: boolean;

  /**
   * Overrides all pdfjs error messages and shows only user's custom error message
   */
  @Input() overriddenError?: boolean;

  /**
   * Turns on all diagnostic logs to the console
   */
  @Input() printLogs?: boolean = false;

  /**
   * The reference of pdfjs component
   */
  @ViewChild('pdfViewer') pdfViewer: PdfJsViewerComponent;

  /**
   * reference of export buttons
   */
  @ViewChild('exportBtn') exportBtn: ElementRef;

  /**
   * Triggered in every export button clicked
   */
  @Output() buttonClicked = new EventEmitter<IconController>();

  /**
   * Emit the current page
   */
  @Output() currentPage = new EventEmitter<number>();

  /**
   * Trigger when the print button clicked
   */
  @Output() printing = new EventEmitter();

  /**
   * Trigger after closing the print prompt.
   */
  @Output() printed = new EventEmitter();

  /**
   * The customized pdfjs viewer
   */
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
        name: 'csv',
        icon: 'https://s2.svgbox.net/files.svg?ic=db'
      },
      {
        id: 3,
        name: 'word',
        icon: 'https://s2.svgbox.net/files.svg?ic=word2'
      },
      ...this.extraBtns
    ];
  }

  /**
   * Adding the extra button for export document
   */
  onDocumentLoad($event: any): void {
    const application = this.pdfViewer.PDFViewerApplication;
    const toolbar = application.toolbar;
    const toolbarContent = toolbar.items;
    const rightToolbar = toolbarContent.container.children[1];
    rightToolbar.style.padding = '0 10px';
    rightToolbar.prepend(this.exportBtn.nativeElement);
  }

  /**
   * Converts PDF to different format
   * @param {IconController} btn - the button clicked
   */
  onClickButton(btn: IconController): void {
    this.buttonClicked.emit(btn);

    if (btn.id === 1) {
      this.convertToExcel();
    } else if (btn.id === 2) {
      this.convertToCSV();
    } else if (btn.id === 3) {
      this.convertToWord();
    }
  }

  /**
   * Converts PDF to Word
   */
  private convertToWord(): void {
    // convert to word
  }

  /**
   * Converts PDF to Excel
   */
  private convertToExcel(): void {
    // convert to excel
  }

  /**
   * Converts PDF to CSV
   */
  private convertToCSV(): void {
    // convert to img
  }

  /**
   * Trigger the current page
   * @param {number} pageNumber
   */
  onPageChange(pageNumber: number): void {
    this.currentPage.emit(pageNumber);
  }

  /**
   * Trigger when the print button pressed
   */
  onBeforePrint(): void {
    this.printing.emit();
  }

  /**
   * Trigger when the print prompt. closed
   */
  onAfterPrint(): void {
    this.printed.emit();
  }
}
