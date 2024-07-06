import { Component } from '@angular/core';
import { vehicles } from '../vehicles';

@Component({
  selector: 'app-vehicleListing',
  templateUrl: './vehicleListing.component.html',
  styleUrls: ['./vehicleListing.component.scss']
})
export class vehicleListingComponent {
  vehicles = vehicles
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }

  reservation = false
  reservationModal(){
    this.reservation = true
  }
}
