import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetailsComponent } from './info-details.component';

describe('InfoDetailsComponent', () => {
  let component: InfoDetailsComponent;
  let fixture: ComponentFixture<InfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
