import { Injectable } from '@angular/core';
import {Signup} from './signup/models';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @summary allow you to signup
   * @param
   * */
  signup(signupInfo: Signup): Observable<Signup> {
    return this.http.post<Signup>(`${this.baseUrl}${this.endpoint}`, signupInfo)
      .pipe(
        map((data: Signup) => data)
      );
  }
}
