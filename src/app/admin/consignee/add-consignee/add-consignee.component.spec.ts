import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsigneeComponent } from './add-consignee.component';

describe('AddConsigneeComponent', () => {
  let component: AddConsigneeComponent;
  let fixture: ComponentFixture<AddConsigneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConsigneeComponent]
    });
    fixture = TestBed.createComponent(AddConsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
