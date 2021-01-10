import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {SuiSidebarModule} from 'ng2-semantic-ui';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [SidebarComponent],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    SuiSidebarModule,
    RouterModule
  ]
})
export class SidebarModule { }
