import {Component, enableProdMode, OnInit} from '@angular/core';
import {Utils} from '../mapper/utils/utils';
import {AuthService} from './auth/auth.service';
import {User} from '../db/models/User';
import {LayoutService} from '../mapper/layout/layout.service';
import {DbService} from '../db/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeLayoutId: number;
  authorized: boolean;

  constructor(
    private authService: AuthService,
    private layoutService: LayoutService,
    private db: DbService
  ) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('loggedUser')) {
      this.db.getUsers().subscribe((users) => {
        this.authService.activeUser.next(users.find(user => user.id === +localStorage.getItem('loggedUser')));
        this.authorized = true;
      });
    } else {
      this.authorized = false;
    }

    this.authService.activeUser.subscribe((user: User) => {
      this.authorized = !!user;
    });

    this.layoutService.activeLayout.subscribe((layoutId: number) => {
      this.activeLayoutId = layoutId;
    });
  }

}
