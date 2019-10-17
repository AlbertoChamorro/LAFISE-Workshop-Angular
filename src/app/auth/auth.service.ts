import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseManagerHttpService } from '../base/base-manager-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseManagerHttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  logIn(username: string, password: string): Observable<any> {
    const queryStrings = `_embed=logins&username=${username}&password=${password}&is_unique=true`;
    return this.http.get(`${this.BASE_URL}/users?${queryStrings}`);
  }
}
