import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrencyRateComponent } from './update-currency-rate.component';

describe('UpdateCurrencyRateComponent', () => {
  let component: UpdateCurrencyRateComponent;
  let fixture: ComponentFixture<UpdateCurrencyRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCurrencyRateComponent]
    });
    fixture = TestBed.createComponent(UpdateCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
