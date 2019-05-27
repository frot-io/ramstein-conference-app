import { Component } from '@angular/core';
import infoJson from '../../constants/info.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.styl']
})
export class InfoComponent {
  public infos = infoJson;
}
