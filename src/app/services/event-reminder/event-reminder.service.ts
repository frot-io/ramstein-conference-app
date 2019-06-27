import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class EventReminderService {
  constructor(private translateService: TranslateService) {}

  showTestNotification() {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        if (reg) {
          reg.showNotification('Test', {
            body: 'Notification Test',
            icon: 'assets/logo-toolbar.png',
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1
            }
          });
        } else {
          this.translateService.get('EVENT_REMINDER_SERVICE.TEST_FAILED').subscribe(text => alert(text));
        }
      }
    );
  }

  // showNotification() {
  //   if (Notification.permission === 'granted') {
  //     navigator.serviceWorker.getRegistration()
  //       .then(reg => reg.showNotification('Hello world!', {
  //         body: 'Here is a notification body!',
  //         icon: 'assets/logo-toolbar.png',
  //         vibrate: [100, 50, 100],
  //         data: {
  //           dateOfArrival: Date.now(),
  //           primaryKey: 1
  //         }
  //       })
  //     );
  //   }
  // }
}
