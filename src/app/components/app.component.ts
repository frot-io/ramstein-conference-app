import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { PushNotificationStoreService } from '../services/push-notification/push-notification-store.service';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { PushNotificationDialogComponent } from './push-notification-dialog/push-notification-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private sidenavService: SidenavService,
              private bottomSheet: MatBottomSheet,
              public pushNotificationStoreService: PushNotificationStoreService) {}

  ngOnInit() {
    this.router.events.subscribe(_ => {
      this.sidenavService.close();
    });

    this.pushNotificationStoreService.state$.subscribe(state => {
      if (state) {
        if (state === 'dismissed') {
          this.bottomSheet.dismiss();
        } else {
          this.bottomSheet.open(PushNotificationDialogComponent);
        }
      }
    });
  }
}
