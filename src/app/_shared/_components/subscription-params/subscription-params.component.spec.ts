import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionParamsComponent } from './subscription-params.component';

describe('SubscriptionParamsComponent', () => {
  let component: SubscriptionParamsComponent;
  let fixture: ComponentFixture<SubscriptionParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
