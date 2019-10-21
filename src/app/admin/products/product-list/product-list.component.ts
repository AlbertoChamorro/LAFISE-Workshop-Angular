import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.services';
import { NotifyServiceService } from 'src/app/base/notify-service.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public isLoading: boolean;

  @Input()
  public productList: Product[];

  constructor(private productService: ProductService, private notifyService: NotifyServiceService) {
    this.isLoading = false;

   }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    this.isLoading = true;
    setTimeout(() => {
      this.productService.getProducts()
        .subscribe(res => {
          this.isLoading = false;
          const data = res.data;
          if (!data) {
            this.notifyService.error('Error al cargar los productios', 'No se han cargado Productos. :(');
            return;
          }
          this.productList = data;
        });
    }, 0);
  }


}
