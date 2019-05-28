import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.styl']
})
export class StartpageComponent {
  constructor(public translateService: TranslateService) {}
}
