import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from 'src/app/classes/event.class';
import eventsJson from '../../constants/mock-events.json';

@Injectable({providedIn: 'root'})
export class EventsStoreService {
  readonly events: Event[];
  // tslint:disable-next-line: variable-name
  private favoritesSet = new Set<number>();
  private readonly favoritesSubject = new BehaviorSubject<Array<number>>([]);
  readonly favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.events = eventsJson;
  }

  favorite(event: Event) {
    if (!this.favoritesSet.has(event.id)) {
      this.favoritesSet.add(event.id);
      this.favoritesSubject.next(Array.from(this.favoritesSet));
    }
  }

  unfavorite(event: Event) {
    if (this.favoritesSet.has(event.id)) {
      this.favoritesSet.delete(event.id);
      this.favoritesSubject.next(Array.from(this.favoritesSet));
    }
  }
}
