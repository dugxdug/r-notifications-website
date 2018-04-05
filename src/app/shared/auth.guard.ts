import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { UsersService } from '../services/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }

  }
}
