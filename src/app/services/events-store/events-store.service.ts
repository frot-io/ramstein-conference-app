import { FavoritesStoreService } from './../favorites-store/favorites-store.service';
import { BehaviorSubject } from 'rxjs';
import { withLatestFrom, filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event.class';
import eventsJson from '../../constants/mock-events.json';

@Injectable({providedIn: 'root'})
export class EventsStoreService {
  private readonly eventsSubject = new BehaviorSubject<Array<Event>>([]);
  readonly events$ = this.eventsSubject.asObservable();
  readonly favoriteEvents$;

  constructor(private favoritesStore: FavoritesStoreService) {
    this.eventsSubject.next(eventsJson);
    this.favoriteEvents$ = this.events$.pipe(
      withLatestFrom(favoritesStore.favorites$),
      map(([events, favoritesIds]) => events.filter(event => favoritesIds.includes(event.id)))
    );
  }

  getEvent(id: number): Event {
    return eventsJson.find(e => e.id === id);
  }
}
