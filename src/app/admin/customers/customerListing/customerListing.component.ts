import { Component } from '@angular/core';
import { customers } from './customers';
import { MENUAdmin, MENUCustomer } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-customerListing',
  templateUrl: './customerListing.component.html',
  styleUrls: ['./customerListing.component.scss']
})
export class customerListingComponent {
  customers = customers
  
  removemodal = false;

  MENU = MENUAdmin
  MENU1 = MENUCustomer

  removecutomer(id: any) {
    this.removemodal = true
  }

  access = false
  manageAccess(){
    this.access = true
  }

}
