import { Event } from './../../classes/event.class';
import { Action } from '@ngrx/store';

export enum EventsActionTypes {
  Favor = '[Events Component] Favor',
  Unfavor = '[Events Component] Unfavor',
  Reset = '[Events Component] Reset',
}

export class Favor implements Action {
  readonly type = EventsActionTypes.Favor;
  constructor(public payload: Event) {}
}

export class Unfavor implements Action {
  readonly type = EventsActionTypes.Unfavor;
  constructor(public payload: Event) {}
}

export class Reset implements Action {
  readonly type = EventsActionTypes.Reset;
}

export type EventsActionsUnion = Favor | Unfavor | Reset;
