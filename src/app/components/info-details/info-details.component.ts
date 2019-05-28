import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import infoJson from '../../constants/info.json';
import { TranslateService } from '@ngx-translate/core';
import { Info } from 'src/app/classes/info.class.js';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.styl']
})
export class InfoDetailsComponent implements OnInit {
  public info: Info;

  constructor(private route: ActivatedRoute,
              public translateService: TranslateService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.info = infoJson.find(i => i.id === params.get('infoId'));
    });
  }
}
