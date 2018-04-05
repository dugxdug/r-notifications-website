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
        this.token = res.token;
        if (res.auth) {
          localStorage.setItem('user', this.b64EncodeUnicode(JSON.stringify(res.user)));
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

  b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(+('0x' + p1));
    }));
  }

  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
