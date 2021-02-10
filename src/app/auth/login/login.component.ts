import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {DbService} from '../../../db/db.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tried = 0;
  recoverEmail: string;
  wantRecover: boolean;
  loggedIn: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private db: DbService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: [{value: '', disabled: false}, Validators.required],
      password: [{value: '', disabled: false}, Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      if (this.authService.login(this.loginForm.value)) {
        console.log(localStorage.getItem('loggedUser'));
      }
    } else {
      this.tried++;
    }
  }

  onRecover($event: string): void {
    if ($event) {
      this.recoverEmail = $event;
    }
  }

  onSendOTP(): void {
    if (this.recoverEmail) {
      console.log(this.recoverEmail);
    }
  }
}
