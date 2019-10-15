import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/login/login.module').then(mod => mod.LoginModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true // <-- debugging purposes only
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
