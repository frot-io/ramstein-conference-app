import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from 'src/app/classes/event.class';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({providedIn: 'root'})
export class FavoritesStoreService {
  private favoritesSet: Set<number>;
  private readonly favoritesSubject = new BehaviorSubject<Array<number>>([]);
  readonly favorites$ = this.favoritesSubject.asObservable();

  constructor(private localStorage: LocalStorageService) {
    const favoritesArray = localStorage.getFavoritesArray();
    this.favoritesSet = new Set(favoritesArray);
    this.favoritesSubject.next(favoritesArray);
  }

  favorite(event: Event) {
    if (!this.favoritesSet.has(event.id)) {
      this.favoritesSet.add(event.id);
      const favoritesArray = Array.from(this.favoritesSet);
      this.localStorage.setFavoritesArray(favoritesArray);
      this.favoritesSubject.next(favoritesArray);
    }
  }

  unfavorite(event: Event) {
    if (this.favoritesSet.has(event.id)) {
      this.favoritesSet.delete(event.id);
      const favoritesArray = Array.from(this.favoritesSet);
      this.localStorage.setFavoritesArray(favoritesArray);
      this.favoritesSubject.next(favoritesArray);
    }
  }
}
