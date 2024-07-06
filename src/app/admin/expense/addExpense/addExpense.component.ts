import { Component } from '@angular/core';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-addExpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.scss']
})
export class addExpenseComponent {

  
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false



}
