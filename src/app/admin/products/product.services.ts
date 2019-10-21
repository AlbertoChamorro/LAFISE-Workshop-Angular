import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseManagerHttpService } from '../../base/base-manager-http.service';
import { HttpClient } from '@angular/common/http';
import { BaseResponseHttp } from '../../base/models/base-response';
import { Product } from './product';

@Injectable()

export class ProductService extends BaseManagerHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    getProducts(): Observable<BaseResponseHttp<Product[]>> {
        const queryStrings = `_expand=type&_expand=subtype`;
        return this.http.get<BaseResponseHttp<Product[]>>(`${this.BASE_URL}/products?${queryStrings}`);
    }
}
