import { Component, OnInit } from '@angular/core';
import { EventsStoreService } from 'src/app/services/events-store/events-store.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {
  constructor(public eventsStoreService: EventsStoreService) { }

  ngOnInit() {
  }

  favorite(event) {
    alert('This does not work yet (but will be working in the future :)');
  }
}
