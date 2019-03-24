import { TestBed } from '@angular/core/testing';

import { PushNotificationServiceService } from './push-notification-service.service';

describe('PushNotificationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushNotificationServiceService = TestBed.get(PushNotificationServiceService);
    expect(service).toBeTruthy();
  });
});
