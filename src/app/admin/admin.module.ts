import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ProductService } from './products/product.services';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    EmployeeListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  exports: []
})
export class AdminModule { }

