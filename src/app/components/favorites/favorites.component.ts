import { Event } from './../../classes/event.class';
import { FavoritesStoreService } from './../../services/favorites-store/favorites-store.service';
import { Component } from '@angular/core';
import { EventsStoreService } from 'src/app/services/events-store/events-store.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.styl']
})
export class FavoritesComponent {

  constructor(public eventsStore: EventsStoreService,
              public favoritesStore: FavoritesStoreService) { }

  unfavorite(event: Event, clickEvent) {
    clickEvent.preventDefault();
    clickEvent.stopImmediatePropagation();
    this.favoritesStore.unfavorite(event);
  }
}
