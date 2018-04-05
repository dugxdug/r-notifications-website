import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  me(): Observable<any> {
    return this._http.get<any>(environment.reliasAlertsApi +
      `auth/me`);
  }

}
