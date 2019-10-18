import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseManagerHttpService } from '../base/base-manager-http.service';
import { HttpClient } from '@angular/common/http';
import { User } from './login/user';
import { BaseResponseHttp } from '../base/models/base-response';
import * as jwt_decode from 'jwt-decode';
import { AuthCredentialAccess } from './login/auth-credential-access';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseManagerHttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  logIn(username: string, password: string): Observable<BaseResponseHttp<User>> {
    const queryStrings = `_embed=logins&username=${username}&password=${password}&is_unique=true`;
    return this.http.get<BaseResponseHttp<User>>(`${this.BASE_URL}/users?${queryStrings}`);
  }

  decodeJwt(accessToken: string): AuthCredentialAccess {
    const data = jwt_decode(accessToken);
    console.log(data);
    return new AuthCredentialAccess(data.iat, data.role, data.name, data.fullName, data.sub, data.workPosition);
  }
}
