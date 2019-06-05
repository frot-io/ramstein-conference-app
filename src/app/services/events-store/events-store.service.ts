import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event.class';
import eventsJson from '../../constants/mock-events.json';

@Injectable({providedIn: 'root'})
export class EventsStoreService {
  readonly events: Event[];

  constructor() {
    this.events = eventsJson;
  }
}
