import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit() {

    }

    logout(): void {
        this.authService.logout().subscribe(res => {
            console.log(res);
          if (!res.auth) {
            this.router.navigate(['/auth']);
          }
        });
      }
}
