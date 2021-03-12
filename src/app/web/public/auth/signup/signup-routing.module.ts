import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup.component';
import {SignupResolver} from './signup.resolver';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    resolve: {
      loggedIn: SignupResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
