import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationBarComponent } from './push-notification-bar.component';

describe('PushNotificationBarComponent', () => {
  let component: PushNotificationBarComponent;
  let fixture: ComponentFixture<PushNotificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
