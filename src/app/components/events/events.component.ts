import { FavoritesStoreService } from './../../services/favorites-store/favorites-store.service';
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
  constructor(public eventsStore: EventsStoreService,
              public favoritesStore: FavoritesStoreService) { }
}
