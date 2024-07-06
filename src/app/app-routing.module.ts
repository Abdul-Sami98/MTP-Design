import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutAuthComponent } from './shared/layout-auth/layout-auth.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutAuthComponent,
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    component:LayoutComponent,
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'',
    component:LayoutComponent,
    loadChildren:()=> import('./customer/customer.module').then(m=>m.CustomerModule)
  },

  
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },

  // { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
