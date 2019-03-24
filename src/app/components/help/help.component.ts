import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './../../services/push-notification/push-notification.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.styl']
})
export class HelpComponent {
// from https://blog.angular-university.io/angular-push-notifications/
readonly VAPID_PUBLIC_KEY = 'BBqTVCz44SYRYuFLopkKdG_rT2izyEMsRbZmluXBAVYM25TmQvVz3tTd18a-02GZmiiYBUZHGq7LmD5qGbs0mMo';

constructor(
  private swPush: SwPush,
  private pushNotificationService: PushNotificationService) {}

subscribeToNotifications() {
  this.swPush.requestSubscription({
    serverPublicKey: this.VAPID_PUBLIC_KEY
  })
  .then(sub => this.pushNotificationService.addPushSubscriber(sub).subscribe())
  .catch(err => alert(err));
}

sendNotification() {
  this.pushNotificationService.send().subscribe();
}
}
