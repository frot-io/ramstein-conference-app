import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import infoJson from '../../constants/info.json';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.styl']
})
export class InfoDetailsComponent implements OnInit {
  public translationKey: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.translationKey = infoJson.find(i => i.id === params.get('infoId')).translationKey;
    });
  }
}
