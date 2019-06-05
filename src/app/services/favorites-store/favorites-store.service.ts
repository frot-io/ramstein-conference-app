import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from 'src/app/classes/event.class';

@Injectable({providedIn: 'root'})
export class FavoritesStoreService {
  private favoritesSet = new Set<number>();
  private readonly favoritesSubject = new BehaviorSubject<Array<number>>([]);
  readonly favorites$ = this.favoritesSubject.asObservable();

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
