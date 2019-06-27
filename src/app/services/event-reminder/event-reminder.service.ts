import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventReminderService {
  showNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration()
        .then(reg => reg.showNotification('Hello world!', {
          body: 'Here is a notification body!',
          icon: 'images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        })
      );
    }
  }
}
