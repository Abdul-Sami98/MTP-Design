import { Component } from '@angular/core';
import { currencyRateList } from './currencyRateList';

@Component({
  selector: 'app-currency-rate-list',
  templateUrl: './currency-rate-list.component.html',
  styleUrls: ['./currency-rate-list.component.scss']
})
export class CurrencyRateListComponent {
  currencyRateList = currencyRateList
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
