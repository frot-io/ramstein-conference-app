import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AppUpdateService {
  constructor(appRef: ApplicationRef,
              swUpdate: SwUpdate) {
    if (environment.production) {
      console.log('Checking for updates every six hours...');
      // https://medium.com/@arjenbrandenburgh/angulars-pwa-swpush-and-swupdate-15a7e5c154ac
      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
      everySixHoursOnceAppIsStable$.subscribe(() => {
        console.log('Checking for updates now.');
        swUpdate.checkForUpdate();
      });
    } else {
      console.log('No auto check for updates in dev mode');
    }
  }
}
