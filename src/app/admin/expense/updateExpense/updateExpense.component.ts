import { Component } from '@angular/core';

@Component({
  selector: 'app-updateExpense',
  templateUrl: './updateExpense.component.html',
  styleUrls: ['./updateExpense.component.scss']
})

export class updateExpenseComponent {
  InYard = false
  Document = false
  Sold = false
  Paid = false
  ShipOK = false
  RelOK = false
}
