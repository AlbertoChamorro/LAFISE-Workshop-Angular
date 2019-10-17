import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AdminRoutingModule
  ],
  exports: []
})
export class AdminModule { }

