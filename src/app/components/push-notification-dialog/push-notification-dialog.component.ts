import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { PushNotificationStoreService } from './../../services/push-notification/push-notification-store.service';

@Component({
  selector: 'app-push-notification-dialog',
  templateUrl: './push-notification-dialog.component.html',
  styleUrls: ['./push-notification-dialog.component.styl']
})
export class PushNotificationDialogComponent {
  constructor(public store: PushNotificationStoreService) { }
}
