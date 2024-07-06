import { Component } from '@angular/core';
import { MENU, MENU1 } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  images: any[] | undefined;

  products = [
    {
      order_id: '#TB010331',
      product_name: 'Macbook Pro',
      customer_profile: 'avatar-2.jpg',
      customer_name: 'Terry White',
      percentage: '70',
      order_date: '17 Dec, 2022',
      delivery_date: '26 Jan, 2024',
      vendor: 'Brazil',
      rating: 4.5,
      status: 'New',
    },
    {
      order_id: '#TB010332',
      product_name: 'Borosil Paper Cup',
      customer_profile: 'avatar-4.jpg',
      customer_name: 'Daniel Gonzalez',
      percentage: '60',
      order_date: '02 Jan, 2024',
      delivery_date: '26 Jan, 2024',
      vendor: 'Namibia',
      rating: 4.8,
      status: 'Out Of Delivery',
    },
    {
      order_id: '#TB010333',
      product_name: 'Stillbird Helmet',
      customer_profile: 'avatar-3.jpg',
      customer_name: 'Stephen Bird',
      percentage: '100',
      order_date: '20 Dec, 2022',
      delivery_date: '29 Dec, 2022',
      vendor: 'USA',
      rating: 4.3,
      status: 'Delivered',
    },
    {
      order_id: '#TB010334',
      product_name: 'Bentwood Chair',
      customer_profile: 'avatar-10.jpg',
      customer_name: 'Ashley Silva',
      percentage: '35',
      order_date: '31 Nov, 2022',
      delivery_date: '13 Dec, 2022',
      vendor: 'Argentina',
      rating: 3.9,
      status: 'Pending',
    },
    {
      order_id: '#TB010335',
      product_name: 'Apple Headphone',
      customer_profile: 'avatar-9.jpg',
      customer_name: 'Scott Wilson',
      percentage: '60',
      order_date: '23 Nov, 2022',
      delivery_date: '03 Dec, 2022',
      vendor: 'Jersey',
      rating: 4.7,
      status: 'Shipping',
    },
    {
      order_id: '#TB010336',
      product_name: 'Smart Watch for Man`s',
      customer_profile: 'avatar-8.jpg',
      customer_name: 'Heather Jimenez',
      percentage: '45',
      order_date: '02 Nov, 2022',
      delivery_date: '12 Nov, 2022',
      vendor: 'Spain',
      rating: 4.4,
      status: 'Delivered',
    },
  ];

  documents = false;

  documentModal() {
    this.documents = true;
  }

  gallery = false;

  constructor() {
    this.images = [
      {
        itemImageSrc: '/assets/images/cars/1.jpg',
        thumbnailImageSrc: '/assets/images/cars/1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: '/assets/images/cars/2.jpg',
        thumbnailImageSrc: '/assets/images/cars/2.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ];
  }
  
  addPaymentModal = false
  addPayment() {
    this.addPaymentModal = true
  }

  income = false
  incomeModal(){
    this.income = true
  }
  
  removemodal = false;

  MENU = MENU
  MENU1 = MENU1

  removecutomer(id: any) {
    this.removemodal = true
  }

  access = false
  manageAccess(){
    this.access = true
  }
  
}
