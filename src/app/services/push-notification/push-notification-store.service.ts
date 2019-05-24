import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { timeout } from 'q';

export type PushNotificationState =
  'notSupported' |
  'supported' |
  'error' |
  'denied' |
  'granted' |
  'dismissed';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationStoreService {
  // from https://blog.angular-university.io/angular-push-notifications/
  readonly VAPID_PUBLIC_KEY = 'BBqTVCz44SYRYuFLopkKdG_rT2izyEMsRbZmluXBAVYM25TmQvVz3tTd18a-02GZmiiYBUZHGq7LmD5qGbs0mMo';
  // tslint:disable-next-line: variable-name
  private _state = new BehaviorSubject<PushNotificationState>(undefined);
  public state$ = this._state.asObservable();

  constructor(private swPush: SwPush,
              private http: HttpClient) {
    // required, otherwise there is an ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      if (this.swPush.isEnabled) {
        switch (Notification.permission) {
          case 'granted':
            this._state.next('granted');
            break;
          case 'denied':
            this._state.next('denied');
            break;
          default:
            this._state.next('supported');
        }
      } else {
        this._state.next('notSupported');
      }
    }, 1000);
  }

  dismiss() {
    this._state.next('dismissed');
  }

  disallow() {
    this._state.next('denied');
  }

  subscribe() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.http.post('/api/notifications', sub).subscribe())
    .catch(err => {
      if (err.name === 'NotAllowedError') {
        this._state.next('denied');
      } else {
        this._state.next('error');
      }
    });
  }

  unsubscribe() {
    this.swPush.unsubscribe().then(/* TODO: send request to remove from list on the server side */);
  }

  // send() {
  //   return this.http.post('/api/newsletter', null);
  // }
}
