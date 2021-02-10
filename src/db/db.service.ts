import { Injectable } from '@angular/core';
import {User} from './models/User';
import {users} from './data/users';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  users = new BehaviorSubject<User[]>([]);

  constructor() { }

  getUsers(): BehaviorSubject<User[]> {
    this.users.next(users);
    return this.users;
  }
}
