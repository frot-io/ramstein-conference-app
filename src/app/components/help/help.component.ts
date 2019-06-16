import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { AppUpdateService } from './../../services/app-update/app-update.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.styl']
})
export class HelpComponent {
  constructor(public translateService: TranslateService,
              private localStorageService: LocalStorageService,
              private appUpdateService: AppUpdateService) {}

  resetNotificationStateAndReload() {
    this.localStorageService.setPushNotificationDismissed(false);
    window.location.reload();
  }

  changeLanguage(lang) {
    this.translateService.use(lang);
    this.localStorageService.setLanguage(lang);
  }

  searchForUpdates() {
    this.appUpdateService.checkForUpdates();
  }

  reset() {
    this.localStorageService.clearLocalStorage();
  }
}
