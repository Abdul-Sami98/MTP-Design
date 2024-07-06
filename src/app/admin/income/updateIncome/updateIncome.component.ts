import { Component } from '@angular/core';

@Component({
  selector: 'app-updateIncome',
  templateUrl: './updateIncome.component.html',
  styleUrls: ['./updateIncome.component.scss']
})
export class updateIncomeComponent {
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false
}
