import { Component } from '@angular/core';
import { paymentList } from '../../payment/paymentList';


@Component({
  selector: 'app-purchaseListing',
  templateUrl: './purchaseListing.component.html',
  styleUrls: ['./purchaseListing.component.scss']
})
export class purchaseListingComponent {
  paymentList = paymentList
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
