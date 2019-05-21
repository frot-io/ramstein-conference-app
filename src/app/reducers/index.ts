import { Event } from './../classes/event.class';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { eventsReducer } from './events/events.reducer';

export interface State {
  events: Array<Event>;
}

export const reducers: ActionReducerMap<State> = {
  events: eventsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
