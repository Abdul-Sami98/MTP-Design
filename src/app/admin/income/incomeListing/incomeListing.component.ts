import { Component } from '@angular/core';
import { vehicles } from '../../vehicle/vehicles';

@Component({
  selector: 'app-incomeListing',
  templateUrl: './incomeListing.component.html',
  styleUrls: ['./incomeListing.component.scss']
})

export class incomeListingComponent {
  vehicles = vehicles
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
