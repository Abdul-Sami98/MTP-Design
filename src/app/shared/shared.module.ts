import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    LayoutAuthComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports:[
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
