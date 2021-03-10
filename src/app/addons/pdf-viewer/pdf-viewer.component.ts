import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  /**
   * @description Fully qualified path to pdf file. (For remote pdf urls over http/https, CORS should be enabled)
   * */
  @Input() src: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
