export class PdfViewer {
  /**
   * Fully qualified path to pdf file. (For remote pdf urls over http/https, CORS should be enabled)
   * */
  src: string = 'http://www.africau.edu/images/default/sample.pdf';

  /**
   * This public property exposes underlying PDFViewerApplication object. Make sure to access it after document is loaded. Opens up the whole world of underlying PDFJS properties and methods. Use it to customize the viewer and document experience.
   * */
  application?: object;

  /**
   * This public property exposes underlying PDFViewerApplicationOptions object. Make sure to access it after document is loaded. Opens up the whole world of underlying PDFJS options. Use it to customize the viewer and document experience.
   * */
  applicationOptions?: object;

  /**
   * Set path to pdfjs's web and build folders.
   * */
  folder?: string;

  /**
   * Open in new tab. Set to true to open document in a new tab
   * */
  newTab?: boolean;

  /**
   * External window options. For allowed comma separated values, refer to https://developer.mozilla.org/en-US/docs/Web/API/Window/open
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open
   * */
  newTabOptions?: string;

  /**
   * Event to be invoked once document is fully loaded(Must provide viewerId). Also returns number of pages in the $event parameter.
   * @example (onLoad)="testPagesLoaded($event)"
   * */
  onLoad?: (id: number) => number;

  /**
   * Event to be invoked when user scrolls through pages(Must provide viewerId). Also returns current page number user is at in the $event parameter.
   * @example (onChange)="testPageChange($event)"
   * */
  onChange?: (id: number) => number;

  /**
   * Event to be invoked before document gets printed(Must provide viewerId).
   * @example (onBeforePrint)="testBeforePrint()"
   * */
  onBeforePrint?: (id: number) => void;

  /**
   * Event to be invoked after document gets printed(Must provide viewerId)
   * @example (onAfterPrint)="testAfterPrint()"
   * */
  onAfterPrint?: (id: number) => void;

  /**
   * Sets/Changes the name of document to be downloaded. If the file name does not ends in .pdf, the component will automatically add it for you.
   * */
  name?: string;

  /**
   * Show specific page. E.g goToPage=3. You may also get/set the page number from your component using '.' notation explicitly, after document is loaded. E.g. myPdfViewer.page = 3;
   * */
  goToPage?: number;

  /**
   * Show last page of the document once it is loaded(If set to true). If you use this option along with page option, undesired effects might occur
   * */
  goToLastPage?: boolean;

  /**
   * Go to a named destination. E.g. To go to section 5.1 use like nameddest=5.1. Do not mix this option with page and lastPage options
   * */
  goToSection?: string;

  /**
   * Set zoom level of document. Applicable values are auto, page-width, page-height, page-fit, 200(As a zoom percentage), left offset(As in "auto,18,827"), top offset(As in "auto,18,127")
   * */
  zoom?: 'auto' | 'page-width' | 'page-height' | 'page-fit' | '200';

  /**
   * Show/hide print button. Set false to hide
   * */
  allowPrint?: boolean;

  /**
   * Start print preview of document. This combined with externalWindow could mimic a print preview functionality just like the one in gmail.
   * */
  printOnLoad?: boolean;

  /**
   * Show/hide download button. Set false to hide
   * */
  allowDownload?: boolean;

  /**
   * Download document as soon as it opens. You may put this to good use.
   * */
  downloadOnLoad?: boolean;

  /**
   * Rotate document clock wise 90°
   * */
  rotateRight?: boolean;

  /**
   * Rotate document anti-clock wise 90°
   * */
  rotateLeft?: boolean;

  /**
   * Type of cursor. Available options are HAND/H, SELECT/S,ZOOM/Z. Case is irrelevant.
   * */
  cursorType?: 'hand' | 'select' | 'zoom';

  /**
   * Sets scroll. Available options are VERTICAL/V, HORIZONTAL/H,WRAPPED/W. Case is irrelevant.
   * */
  scroll?: 'horizontal' | 'vertical' | 'wrapped';

  /**
   * Sets Odd or Even spread. Available options are ODD/O, EVEN/E,NONE/N. Case is irrelevant.
   * */
  spread?: 'odd' | 'even' | 'none';

  /**
   * Show/hide presentation(full screen) button. Set false to hide
   * */
  fullScreen?: boolean;

  /**
   * State of sidebar. Available options are none, thumbs,bookmarks,attachments. E.g. pagemode=attachments.
   * */
  mode?: 'none' | 'thumbs' | 'bookmark' | 'attachments';

  /**
   * Show/hide open file button. Set false to hide
   * */
  allowOpenFile?: boolean;

  /**
   * Show/hide bookmark button. Set false to hide
   * */
  allowBookmark?: boolean;

  /**
   * Show a simple css based spinner/progress before the document loads
   * */
  spinner?: boolean;

  /**
   * Set locale(language) of toolbar/buttons and other viewer elements. E.g. 'de-AT', 'en-GB' etc
   * */
  i18n?: string;

  /**
   * Instructs the viewer to use css based zoom. This will produce better zoom effect on mobile devices and tablets.
   * */
  cssZoom?: boolean;

  /**
   * Custom error message
   * */
  error?: string;

  /**
   * Appends custom error message to the end of other pdfjs error messages
   * */
  appendedError?: boolean;

  /**
   * Overrides all pdfjs error messages and shows only user's custom error message
   * */
  overriddenError?: boolean;

  /**
   * Turns on all diagnostic logs to the console
   * */
  printLogs?: boolean;

}

