import { Component } from '@angular/core';
import { customers } from './customers';
import { MENU, MENU1 } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-customerListing',
  templateUrl: './customerListing.component.html',
  styleUrls: ['./customerListing.component.scss']
})
export class customerListingComponent {
  customers = customers
  
  removemodal = false;

  MENU = MENU
  MENU1 = MENU1

  removecutomer(id: any) {
    this.removemodal = true
  }

  access = false
  manageAccess(){
    this.access = true
  }

}
