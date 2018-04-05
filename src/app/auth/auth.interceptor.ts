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
    // const authHeader = this._cookieServ.get('.GNOSIS');
    // tslint:disable-next-line:max-line-length
    const authHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYzU0OWM2MmFlNTUwNjUwYmZjODI0OSIsImlhdCI6MTUyMjkzODczMCwiZXhwIjoxNTIzMDI1MTMwfQ.yYGF-SvqL-BYUkLxAI8CsO01TmahvYQFB9Cp_qktqQg';
    const authReq = req.clone({setHeaders: { Authorization: authHeader }});

    return next.handle(authReq);
  }
}
