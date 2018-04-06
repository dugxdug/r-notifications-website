import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging/messaging.service';
import { AuthService } from './auth/auth.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  message;
  constructor(public msgService: MessagingService, public auth: AuthService) { }

  ngOnInit() {
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
  }
}
