import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeListComponent } from './consignee-list.component';

describe('ConsigneeListComponent', () => {
  let component: ConsigneeListComponent;
  let fixture: ComponentFixture<ConsigneeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsigneeListComponent]
    });
    fixture = TestBed.createComponent(ConsigneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
