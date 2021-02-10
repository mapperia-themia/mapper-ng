import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../app/auth/auth.service';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faClock, faComments, faTh} from '@fortawesome/free-solid-svg-icons';

interface App {
  id: number;
  name: string;
}

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  apps: IconProp = faTh;
  currentApp: App;
  chat: IconProp = faComments;
  clock: IconProp = faClock;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.currentApp = {
      id: 1,
      name: 'eLearning'
    };
  }

  logout(): void {
    this.authService.logout();
  }
}
