import { Component } from '@angular/core';
import { paymentList } from '../paymentList';


@Component({
  selector: 'app-paymentListing',
  templateUrl: './paymentListing.component.html',
  styleUrls: ['./paymentListing.component.scss']
})
export class paymentListingComponent {
  
  paymentList = paymentList
  
  removemodal = false;

  removecutomer(id: any) {
    this.removemodal = true
  }
}
