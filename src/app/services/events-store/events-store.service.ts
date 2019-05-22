import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from 'src/app/classes/event.class';
import mockEvents from '../../constants/mock-events.json';

@Injectable({providedIn: 'root'})
export class EventsStoreService {
  // tslint:disable-next-line: variable-name
  private readonly _events = new BehaviorSubject<Event[]>([]);
  readonly events$ = this._events.asObservable();

  constructor() {
    this.events = mockEvents;
  }

  private get events(): Event[] {
    return this._events.getValue();
  }

  private set events(events: Event[]) {
    this._events.next(events);
  }

  favorite(event: Event) {
    const index = this.events.map(e => e.id).indexOf(event.id);
    this.events = [
      ...this.events.slice(0, index),
      { ...this.events[index], favorite: true },
      ...this.events.slice(index + 1)
    ];
  }

  unfavorite(event: Event) {
    const index = this.events.map(e => e.id).indexOf(event.id);
    this.events = [
      ...this.events.slice(0, index),
      { ...this.events[index], favorite: false },
      ...this.events.slice(index + 1)
    ];
  }
}
