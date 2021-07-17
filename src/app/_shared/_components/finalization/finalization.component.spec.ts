import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationComponent } from './finalization.component';

describe('FinalizationComponent', () => {
  let component: FinalizationComponent;
  let fixture: ComponentFixture<FinalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
