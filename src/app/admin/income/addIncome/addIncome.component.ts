import { Component } from '@angular/core';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-addIncome',
  templateUrl: './addIncome.component.html',
  styleUrls: ['./addIncome.component.scss']
})
export class addIncomeComponent {

  
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false



}
