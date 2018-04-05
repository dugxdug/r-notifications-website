import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users.dto';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }
  getAllUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.get<any>(environment.reliasAlertsApi +
      `users`, httpOptions);
  }

  GetUserByEmail(email: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.get<any>(environment.reliasAlertsApi +
      `users` + email, httpOptions);
  }

    updateUser(user: User): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        const body = JSON.stringify(user);

        return this._http.put<any>(environment.reliasAlertsApi +
            `users`, body, httpOptions);
    }
    
  me(): Observable<any> {
    return this._http.get<any>(environment.reliasAlertsApi +
      `auth/me`);
  }
}
