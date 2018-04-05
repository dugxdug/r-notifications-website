import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NotificationsService {

  constructor(private _http: HttpClient) { }

  sendNotification(notification): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(notification);

    return this._http.post<any>(environment.reliasAlertsApi +
      `alerts/send`, body, httpOptions);
  }

}
