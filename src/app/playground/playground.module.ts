import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import {PdfViewerModule} from '../addons/pdf-viewer/pdf-viewer.module';
import {PdfJsViewerModule} from 'ng2-pdfjs-viewer';



@NgModule({
  declarations: [PlaygroundComponent],
  exports: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    PdfJsViewerModule
  ]
})
export class PlaygroundModule { }
