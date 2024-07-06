import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateListComponent } from './currency-rate-list.component';

describe('CurrencyRateListComponent', () => {
  let component: CurrencyRateListComponent;
  let fixture: ComponentFixture<CurrencyRateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyRateListComponent]
    });
    fixture = TestBed.createComponent(CurrencyRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
