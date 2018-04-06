import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'firebase';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  me(): Observable<any> {
    return this._http.get<User>(environment.reliasAlertsApi +
      `auth/me`);
  }

}
