import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from '@firebase/util';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class MessagingService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private _http: HttpClient
  ) { }


  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) {
        return;
      }

      const data = { [user.uid]: token };
      this.db.object('fcmTokens/').update(data);
    });
  }

  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received', payload);
      this.currentMessage.next(payload);
    });

  }

  sendMessage(message: FirebaseNotification) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // tslint:disable-next-line:max-line-length
          'Authorization': 'AAAAOHfZxB4:APA91bE1-G0sgLWMyQS5nUfm5wfdsu6l-rE4j8T_Khs00uw6rejIH40novho8lVSa26MRWy0Hj9NDvX0z0NQ7QGxxT2n5qqNgm6r6aGGQoqGHkpdxctSFOT81fZUXBlMztaQdwQQ53Ce'
      })
    };
    const body = JSON.stringify(message);
    this._http.post<any>('https://fcm.googleapis.com/fcm/send', body, httpOptions);
  }
}

export class FirebaseNotification {
  notification: {
    title: string,
    body: string
    click_action: string,
    to: string
  };
}
