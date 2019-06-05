import { Component } from '@angular/core';
import { EventsStoreService } from 'src/app/services/events-store/events-store.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    './events.component.styl',
    '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'
  ]
})
export class EventsComponent {
  constructor(public eventsStoreService: EventsStoreService) { }
}
