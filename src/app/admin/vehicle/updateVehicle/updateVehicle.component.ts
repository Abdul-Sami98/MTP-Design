import { Component } from '@angular/core';

@Component({
  selector: 'app-updateVehicle',
  templateUrl: './updateVehicle.component.html',
  styleUrls: ['./updateVehicle.component.scss']
})
export class updateVehicleComponent {
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false
}
