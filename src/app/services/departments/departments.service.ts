import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DepartmentService {

  constructor(private _http: HttpClient) { }

  getDepartments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.get<any>(environment.reliasAlertsApi +
      `departments/getAll`, httpOptions);
  }

}
