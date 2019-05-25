import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.styl']
})
export class HelpComponent {
  constructor(public translateService: TranslateService,
              private localStorageService: LocalStorageService) {}

  changeLanguage(lang) {
    this.translateService.use(lang);
    this.localStorageService.setLanguage(lang);
  }
}
