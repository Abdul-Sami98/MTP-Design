import { Component } from '@angular/core';
import { users } from './users';
import { MENU, MENU1 } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-usersListing',
  templateUrl: './usersListing.component.html',
  styleUrls: ['./usersListing.component.scss']
})

export class usersListingComponent {

  MENU = MENU
  MENU1 = MENU1

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
