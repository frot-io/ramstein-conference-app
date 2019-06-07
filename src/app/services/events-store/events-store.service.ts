import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/classes/event.class';
import eventsJson from '../../constants/events.json';
import { FavoritesStoreService } from './../favorites-store/favorites-store.service';

@Injectable({providedIn: 'root'})
export class EventsStoreService {
  private readonly eventsSubject = new BehaviorSubject<Array<Event>>([]);
  readonly events$ = this.eventsSubject.asObservable();
  readonly favoriteEvents$;

  constructor(private favoritesStore: FavoritesStoreService) {
    this.eventsSubject.next(eventsJson);
    this.favoriteEvents$ = favoritesStore.favorites$.pipe(
      map(favoritesIds => eventsJson.filter(event => favoritesIds.includes(event['ID'])))
    );
  }

  getEvent(id: number): Event {
    return eventsJson.find(event => event['ID'] === id);
  }
}
