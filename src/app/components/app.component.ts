import { AppUpdateService } from './../services/app-update/app-update.service';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { PushNotificationStoreService } from '../services/push-notification/push-notification-store.service';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { PushNotificationDialogComponent } from './push-notification-dialog/push-notification-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private sidenavService: SidenavService,
              private bottomSheet: MatBottomSheet,
              private pushNotificationStoreService: PushNotificationStoreService,
              private appUpdateService: AppUpdateService,
              private translate: TranslateService,
              private localStorageService: LocalStorageService) {
    translate.setDefaultLang('de');
    translate.use(localStorageService.getLanguage() || 'de');
  }

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
