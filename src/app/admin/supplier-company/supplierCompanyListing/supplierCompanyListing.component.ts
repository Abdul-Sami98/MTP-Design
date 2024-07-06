import { Component } from '@angular/core';
import { supplierCompany } from '../supplierCompany';

@Component({
  selector: 'app-supplierCompanyListing',
  templateUrl: './supplierCompanyListing.component.html',
  styleUrls: ['./supplierCompanyListing.component.scss']
})
export class supplierCompanyListingComponent {
  supplierCompany = supplierCompany
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
