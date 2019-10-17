import { HttpClient } from '@angular/common/http';

export abstract class BaseManagerHttpService {

  protected BASE_URL: string;

  constructor(protected http: HttpClient) {
    this.BASE_URL = 'http://localhost:9000/api';
  }
}
