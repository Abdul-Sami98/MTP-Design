import { Component } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'app-consignee-list',
  templateUrl: './consignee-list.component.html',
  styleUrls: ['./consignee-list.component.scss']
})

export class ConsigneeListComponent {
  users = users
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }

}
