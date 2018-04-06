import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
      // private _cookieServ: CookieService
) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = localStorage.getItem('token');
    let authReq: HttpRequest<any>;
    if (authHeader && req.url !== 'https://fcm.googleapis.com/fcm/send') {
      authReq = req.clone({setHeaders: { Authorization: authHeader }});
    } else {
      authReq = req.clone();
    }

    return next.handle(authReq);
  }
}
