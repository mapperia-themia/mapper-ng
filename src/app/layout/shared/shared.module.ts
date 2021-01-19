import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [ContentComponent, NavbarComponent, ToolbarComponent, ProfileComponent, PreviewComponent],
  exports: [
    ContentComponent,
    ToolbarComponent,
    NavbarComponent,
    ProfileComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
