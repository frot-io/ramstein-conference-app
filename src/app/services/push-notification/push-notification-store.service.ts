import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  // tslint:disable-next-line: variable-name
  private _state = new BehaviorSubject<PushNotificationState>(undefined);
  public state$ = this._state.asObservable();

  constructor(private swPush: SwPush,
              private http: HttpClient,
              private localStorageService: LocalStorageService) {

    if (this.localStorageService.getPushNotificationDismissed()) {
      this._state.next('dismissed');
    } else {
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
  }

  dismiss() {
    this._state.next('dismissed');
    this.localStorageService.setPushNotificationDismissed(true);
  }

  disallow() {
    this._state.next('denied');
  }

  subscribe() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.vapidPublicKey
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
