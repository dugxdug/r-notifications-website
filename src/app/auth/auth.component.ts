import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  username: string;
  password: string;
  token: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // login() {
  // this.loading = true;
  // this.authService.login(this.model.username, this.model.password)
  //   .subscribe(data => {
  //     this.router.navigate([this.returnUrl]);
  //   },
  //     error => {
  //       console.log(error);
  //       this.loading = false;
  //     });
  // }

  login(): void {
    if (this.username && this.password) {
      const user = {
        email: this.username,
        password: this.password
      };
      this.authService.login(user).subscribe(res => {
        console.log(res);
        this.token = res.token;
        console.log(this.token);
        if (res.auth) {
          this.router.navigate(['']);
        } else {
          alert('Invalid credentials');
        }
      }, err => {
        alert('invalid crentials');
        console.log(err);
      });
    } else {
      alert('Invalid credentials');
    }
  }

}
