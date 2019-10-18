import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyServiceService {

  constructor(private toastrService: ToastrService) { }

  success(title: string, message: string, options: Partial<any> = this.getDefaultValues()): ActiveToast<any> {
    return this.toastrService.success(message, title, options);
  }

  error(title: string, message: string, options: Partial<any> = this.getDefaultValues()): ActiveToast<any> {
    return this.toastrService.error(message, title, options);
  }

  getDefaultValues(): Partial<any> {
    return {
      timeOut: 1500
    };
  }
}
