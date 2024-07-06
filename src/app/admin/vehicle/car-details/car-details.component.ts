import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  qty: any = 1;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  slides: any
  isRTL: any = false;

  ngOnInit() {

    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Overview', active: true }
    ];

    const direction = document.documentElement.getAttribute('dir')
    if (direction == 'ltr') {
      this.isRTL = false
    } else {
      this.isRTL = true
    }

    setTimeout(() => {
      this.slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: this.isRTL
      };
    });

    this.slides = [
      {
        previewImageSrc: 'assets/images/cars/audi/1.jpg',
        thumbnailImageSrc: 'assets/images/cars/audi/1.jpg'
      },
      {
        previewImageSrc: 'assets/images/cars/audi/2.jpg',
        thumbnailImageSrc: 'assets/images/cars/audi/2.jpg'
      },
      {
        previewImageSrc: 'assets/images/cars/audi/3.jpg',
        thumbnailImageSrc: 'assets/images/cars/audi/3.jpg'
      },
      {
        previewImageSrc: 'assets/images/cars/audi/4.jpg',
        thumbnailImageSrc: 'assets/images/cars/audi/4.jpg'
      },
      {
        previewImageSrc: 'assets/images/cars/audi/2.jpg',
        thumbnailImageSrc: 'assets/images/cars/audi/2.jpg'
      }
    ]
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: this.isRTL
  };


  config = {
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  }


  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist')

    swiper.forEach((el: any) => {
      el.classList.remove('swiper-slide-thumb-active')
    })
    event.target.closest('.swiperlist').classList.add('swiper-slide-thumb-active')
    this.slickModal.slickGoTo(id)
  }

  slickChange(event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
    console.log(event.currentSlide)
  }

  reservation = false
  reservationModal(){
    this.reservation = true
  }
}
