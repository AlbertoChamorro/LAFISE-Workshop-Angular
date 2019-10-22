import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
  ],
  exports: [
    PaginationComponent,
    CommonModule
  ],
  providers: []
})
export class BaseCommonModule {}
