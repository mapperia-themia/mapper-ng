import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer.component';
import {PdfJsViewerModule} from 'ng2-pdfjs-viewer';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [PdfViewerComponent],
    exports: [
        PdfViewerComponent
    ],
  imports: [
    CommonModule,
    PdfJsViewerModule,
    NgbDropdownModule
  ]
})
export class PdfViewerModule { }
