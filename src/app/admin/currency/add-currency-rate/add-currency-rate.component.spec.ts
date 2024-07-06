import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyRateComponent } from './add-currency-rate.component';

describe('AddCurrencyRateComponent', () => {
  let component: AddCurrencyRateComponent;
  let fixture: ComponentFixture<AddCurrencyRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCurrencyRateComponent]
    });
    fixture = TestBed.createComponent(AddCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
