import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Signup} from './models';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private signupInfo: Signup;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  onSignup(): void {
    this.authService.signup(this.signupInfo).subscribe((response: Signup) => {
      console.log(response);
    });
  }

}
