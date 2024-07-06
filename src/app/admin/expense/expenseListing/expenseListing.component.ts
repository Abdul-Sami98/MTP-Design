import { Component } from '@angular/core';
import { vehicles } from '../../vehicle/vehicles';

@Component({
  selector: 'app-expenseListing',
  templateUrl: './expenseListing.component.html',
  styleUrls: ['./expenseListing.component.scss']
})

export class expenseListingComponent {
  vehicles = vehicles
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
