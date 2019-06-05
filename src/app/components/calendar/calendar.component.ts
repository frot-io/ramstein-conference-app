import { Component, OnInit } from '@angular/core';
import { EventsStoreService } from 'src/app/services/events-store/events-store.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    './calendar.component.styl',
    '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'
  ]
})
export class CalendarComponent implements OnInit {
  constructor(public eventsStoreService: EventsStoreService) { }

  ngOnInit() {
  }
}
