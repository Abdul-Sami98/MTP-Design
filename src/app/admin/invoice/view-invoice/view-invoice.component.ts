import { Component } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { invoice } from '../invoice-list/data';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent {
  breadCrumbItems!: Array<{}>;
  productDetail = invoice;
  products: any;
  isImage: any;
  // print
  printPage() {
    window.print();
  }

  constructor(private route: ActivatedRoute) {
    this.products = this.route.snapshot.params
  }

  ngOnInit(): void {
    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Invoices' },
      { label: 'Invoice Details', active: true }
    ];
  }
}
