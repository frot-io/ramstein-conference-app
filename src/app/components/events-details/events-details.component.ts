import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Event } from './../../classes/event.class';
import { EventsStoreService } from './../../services/events-store/events-store.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.styl']
})
export class EventsDetailsComponent implements OnInit {
  public event: Event;

  constructor(private route: ActivatedRoute,
              private eventStore: EventsStoreService,
              public translateService: TranslateService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      const id = Number(params.get('eventId'));
      this.event = this.eventStore.getEvent(id);
    });
  }
}
