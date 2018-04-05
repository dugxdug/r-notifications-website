import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.get<any>(environment.reliasAlertsApi +
      `users/getAll`, httpOptions);
  }

}
