import { Component } from '@angular/core';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-addVehicle',
  templateUrl: './addVehicle.component.html',
  styleUrls: ['./addVehicle.component.scss']
})
export class addVehicleComponent {

  
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false



}
