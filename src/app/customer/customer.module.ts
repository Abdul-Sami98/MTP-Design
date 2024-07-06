import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';

import { DialogModule } from 'primeng/dialog';
// Load Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { CountUpModule } from 'ngx-countup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { InputNumberModule } from 'primeng/inputnumber';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { MyBalanceComponent } from './my-balance/my-balance.component';
import { CarsComponent } from './cars/cars.component';
import { GalleriaModule } from 'primeng/galleria';

import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    DashboardComponent,
    PurchasesComponent,
    MyBalanceComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CommonModule,
    TableModule,
    ProgressBarModule,
    PaginatorModule,
    DialogModule,
    MenuModule,
    ToastModule,
    OverlayPanelModule,
    CheckboxModule,
    FileUploadModule,
    CountUpModule,
    FormsModule,
    NgApexchartsModule,
    CalendarModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    DataViewModule,
    PaginatorModule,
    ScrollPanelModule,
    OverlayPanelModule,
    LeafletModule,
    ProgressBarModule,
    CountUpModule,
    SlickCarouselModule,
    CountUpModule,
    CalendarModule,
    TableModule,
    CheckboxModule,
    InputNumberModule,
    OverlayPanelModule,
    FormsModule,
    ReactiveFormsModule,
    GalleriaModule,
    ImageModule
  ]
})
export class CustomerModule { }
