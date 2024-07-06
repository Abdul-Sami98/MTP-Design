import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CarsComponent } from './cars/cars.component';
import { MyBalanceComponent } from './my-balance/my-balance.component';

const routes: Routes = [
  {
    path:'customer-dashboard',
    component:DashboardComponent
  },
  {
    path:'purchases',
    component:PurchasesComponent
  },
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'my-balance',
    component:MyBalanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
