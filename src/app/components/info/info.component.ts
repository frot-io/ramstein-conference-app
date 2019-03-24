import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationServiceService } from './../../services/push-notification/push-notification-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.styl']
})
export class InfoComponent {
  // from https://blog.angular-university.io/angular-push-notifications/
  readonly VAPID_PUBLIC_KEY = 'BBqTVCz44SYRYuFLopkKdG_rT2izyEMsRbZmluXBAVYM25TmQvVz3tTd18a-02GZmiiYBUZHGq7LmD5qGbs0mMo';

  constructor(
    private swPush: SwPush,
    private pushNotificationService: PushNotificationServiceService) {}

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.pushNotificationService.addPushSubscriber(sub).subscribe())
    .catch(err => alert('Could not subscribe to notifications'));
  }

  sendNotification() {
    this.pushNotificationService.send();
  }
}
