import { Component } from '@angular/core';
import { users } from './users';
import { MENUAdmin, MENUCustomer } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-usersListing',
  templateUrl: './usersListing.component.html',
  styleUrls: ['./usersListing.component.scss']
})

export class usersListingComponent {

  MENU = MENUAdmin
  MENU1 = MENUCustomer

  users = users
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }

  access = false
  manageAccess(){
    this.access = true
  }


}
