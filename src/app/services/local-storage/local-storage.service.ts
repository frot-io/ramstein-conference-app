import { Injectable } from '@angular/core';

const KEYS = {
  LANGUAGE: 'Lang',
  PUSH_NOTIFICATION_DISMISSED: 'PushNotificationDismissed',
  FAVORITES_ARRAY: 'FavoritesArray'
};

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setLanguage(lang: string) {
    localStorage.setItem(KEYS.LANGUAGE, lang);
  }

  getLanguage(): string | undefined {
    return localStorage.getItem(KEYS.LANGUAGE);
  }

  setPushNotificationDismissed(dismissed: boolean) {
    localStorage.setItem(KEYS.PUSH_NOTIFICATION_DISMISSED, JSON.stringify(dismissed));
  }

  getPushNotificationDismissed(): boolean | undefined {
    const stringValue = localStorage.getItem(KEYS.PUSH_NOTIFICATION_DISMISSED);
    if (stringValue) {
      return JSON.parse(stringValue);
    }
    return undefined;
  }

  setFavoritesArray(favoritesIds: Array<number>) {
    localStorage.setItem(KEYS.FAVORITES_ARRAY, JSON.stringify(favoritesIds));
  }

  getFavoritesArray(): Array<number> {
    const array = localStorage.getItem(KEYS.FAVORITES_ARRAY);
    if (array) {
      return JSON.parse(array);
    }
    return [];
  }
}
