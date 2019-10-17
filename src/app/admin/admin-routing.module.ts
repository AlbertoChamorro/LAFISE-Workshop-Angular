import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'employees',
        component: EmployeeListComponent
      },
      {
        path: '',
        redirectTo: '/admin/products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
