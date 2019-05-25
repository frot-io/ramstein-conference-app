import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';

const KEYS = {
  LANGUAGE: 'Lang',
  PUSH_NOTIFICATION_DISMISSED: 'PushNotificationDismissed'
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


}
