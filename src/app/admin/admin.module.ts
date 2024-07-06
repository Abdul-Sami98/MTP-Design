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



import { AdminRoutingModule } from './admin-routing.module';
import { CalculationOfVehicleComponent } from './calculation-of-vehicle/calculation-of-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { UpdateCurrencyRateComponent } from './currency/update-currency-rate/update-currency-rate.component';
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
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    CalculationOfVehicleComponent,
    DashboardComponent,
    addCustomerComponent,
    customerListingComponent,
    updateCustomerComponent,
    addExpenseComponent,
    expenseListingComponent,
    updateExpenseComponent,
    addIncomeComponent,
    incomeListingComponent,
    updateIncomeComponent,
    addPaymentComponent,
    paymentListingComponent,
    updatePaymentComponent,
    addPurchaseComponent,
    purchaseListingComponent,
    updatePurchaseComponent,
    addSupplierCompanyComponent,
    supplierCompanyListingComponent,
    updateSupplierCompanyComponent,
    addUsersComponent,
    usersListingComponent,
    updateUsersComponent,
    addVehicleComponent,
    vehicleListingComponent,
    updateVehicleComponent,
    AddCurrencyRateComponent,
    CurrencyRateListComponent,
    UpdateCurrencyRateComponent,
    vehicleDetailComponent,
    CreateInvoiceComponent,
    InvoiceListComponent,
    ViewInvoiceComponent,
    AddConsigneeComponent,
    ConsigneeListComponent,
    ProfileComponent,
    ChangePasswordComponent,
    AccessManagerComponent,
    CarDetailsComponent,
    ManageAccessComponent,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
