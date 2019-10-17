import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BaseManagerHttpService {

  protected BASE_URL: string;

  constructor(protected http: HttpClient) {
    this.BASE_URL = 'http://localhost:9000/api';
  }
}
