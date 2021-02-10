import {Injectable} from '@angular/core';
import {User} from '../../db/models/User';
import {BehaviorSubject} from 'rxjs';
import {DbService} from '../../db/db.service';

interface RequestedUserData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  activeUser = new BehaviorSubject<User>(null);

  constructor(
    private db: DbService
  ) {
  }

  login(requestedUserData: RequestedUserData): boolean {
    let requestedUser: User;

    this.db.getUsers().subscribe((users: User[]) => {
      requestedUser = users.find(user => ((user.username === requestedUserData.username) && (user.password === requestedUserData.password)));
    });

    if (requestedUser && requestedUser.active) {
      this.activeUser.next(requestedUser);
      localStorage.setItem('loggedUser', requestedUser.id.toString());
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.activeUser.next(null);
  }
}
