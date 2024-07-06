import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculationOfVehicleComponent } from './calculation-of-vehicle/calculation-of-vehicle.component';
import { addCustomerComponent } from './customers/addCustomer/addCustomer.component';
import { customerListingComponent } from './customers/customerListing/customerListing.component';
import { updateCustomerComponent } from './customers/updateCustomer/updateCustomer.component';
import { addExpenseComponent } from './expense/addExpense/addExpense.component';
import { expenseListingComponent } from './expense/expenseListing/expenseListing.component';
import { updateExpenseComponent } from './expense/updateExpense/updateExpense.component';
import { addIncomeComponent } from './income/addIncome/addIncome.component';
import { incomeListingComponent } from './income/incomeListing/incomeListing.component';
import { updateIncomeComponent } from './income/updateIncome/updateIncome.component';
import { addPaymentComponent } from './payment/addPayment/addPayment.component';
import { paymentListingComponent } from './payment/paymentListing/paymentListing.component';
import { updatePaymentComponent } from './payment/updatePayment/updatePayment.component';
import { addPurchaseComponent } from './purchase/addPurchase/addPurchase.component';
import { purchaseListingComponent } from './purchase/purchaseListing/purchaseListing.component';
import { updatePurchaseComponent } from './purchase/updatePurchase/updatePurchase.component';
import { addSupplierCompanyComponent } from './supplier-company/addSupplierCompany/addSupplierCompany.component';
import { supplierCompanyListingComponent } from './supplier-company/supplierCompanyListing/supplierCompanyListing.component';
import { updateSupplierCompanyComponent } from './supplier-company/updateSupplierCompany/updateSupplierCompany.component';
import { addUsersComponent } from './users/addUsers/addUsers.component';
import { usersListingComponent } from './users/usersListing/usersListing.component';
import { updateUsersComponent } from './users/updateUsers/updateUsers.component';
import { addVehicleComponent } from './vehicle/addVehicle/addVehicle.component';
import { vehicleListingComponent } from './vehicle/vehicleListing/vehicleListing.component';
import { updateVehicleComponent } from './vehicle/updateVehicle/updateVehicle.component';
import { AddCurrencyRateComponent } from './currency/add-currency-rate/add-currency-rate.component';
import { CurrencyRateListComponent } from './currency/currency-rate-list/currency-rate-list.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { ViewInvoiceComponent } from './invoice/view-invoice/view-invoice.component';
import { vehicleDetailComponent } from './vehicle/vehicleDetail/vehicleDetail.component';
import { AddConsigneeComponent } from './consignee/add-consignee/add-consignee.component';
import { ConsigneeListComponent } from './consignee/consignee-list/consignee-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccessManagerComponent } from './access-manager/access-manager.component';
import { CarDetailsComponent } from './vehicle/car-details/car-details.component';
import { ManageAccessComponent } from './manage-access/manage-access.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path:'calculation-of-vehicle',
    component:CalculationOfVehicleComponent
  },
  {
    path:'add-customer',
    component:addCustomerComponent
  },
  {
    path:'customer-list',
    component:customerListingComponent
  },
  {
    path:'add-consignee',
    component:AddConsigneeComponent
  },
  {
    path:'consignee-list',
    component:ConsigneeListComponent
  },
  {
    path:'update-customer',
    component:updateCustomerComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'add-expense',
    component:addExpenseComponent
  },
  {
    path:'expense-list',
    component:expenseListingComponent
  },
  {
    path:'update-expense',
    component:updateExpenseComponent
  },

  {
    path:'add-income',
    component:addIncomeComponent
  },
  {
    path:'income-list',
    component:incomeListingComponent
  },
  {
    path:'update-income',
    component:updateIncomeComponent
  },

  {
    path:'add-payment',
    component:addPaymentComponent
  },
  {
    path:'payment-list',
    component:paymentListingComponent
  },
  {
    path:'update-payment',
    component:updatePaymentComponent
  },

  {
    path:'add-purchase',
    component:addPurchaseComponent
  },
  {
    path:'purchase-list',
    component:purchaseListingComponent
  },
  {
    path:'update-purchase',
    component:updatePurchaseComponent
  },

  {
    path:'add-supplier-company',
    component:addSupplierCompanyComponent
  },
  {
    path:'supplier-company-list',
    component:supplierCompanyListingComponent
  },
  {
    path:'update-supplier-company',
    component:updateSupplierCompanyComponent
  },

  {
    path:'add-users',
    component:addUsersComponent
  },
  {
    path:'users-list',
    component:usersListingComponent
  },
  {
    path:'update-users',
    component:updateUsersComponent
  },

  {
    path:'add-vehicle',
    component:addVehicleComponent
  },
  {
    path:'vehicle-list',
    component:vehicleListingComponent
  },
  {
    path:'vehicle-detail',
    component:vehicleDetailComponent
  },
  {
    path:'update-vehicle',
    component:updateVehicleComponent
  }, 
  {
    path:'add-staff',
    component:addUsersComponent
  },
  {
    path:'staff-list',
    component:usersListingComponent
  },
  {
    path:'update-staff',
    component:updateUsersComponent
  }, 
  {
    path:'add-currency-rate',
    component:AddCurrencyRateComponent
  }, 
  {
    path:'currency-rate-list',
    component:CurrencyRateListComponent
  }, 

  {
    path:'generate-invoice',
    component:CreateInvoiceComponent
  }, 
  {
    path:'invoice-list',
    component:InvoiceListComponent
  },
  {
    path:'view-invoice',
    component:ViewInvoiceComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'admin-change-password',
    component:ChangePasswordComponent
  },
  {
    path:'access-manager',
    component:AccessManagerComponent
  },
  {
    path:'car-detail',
    component:CarDetailsComponent
  },
  {
    path:'manage-access',
    component:ManageAccessComponent
  },
  {
    path:'customer-detail',
    component:CustomerDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
