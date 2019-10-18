import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotifyServiceService } from 'src/app/base/notify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private data: any = {
    username: 'achamorro',
    password: '123456'
  };

  public isLoading: boolean;

  constructor(private router: Router, private authService: AuthService, private notifyService: NotifyServiceService) {
    this.isLoading = false;
  }

  ngOnInit() {
  }

  logIn = () => {
    this.isLoading = true;
    setTimeout(() => {
      this.authService.logIn(this.data.username, this.data.password)
        .subscribe(res => {
          this.isLoading = false;
          const data = res.data;
          if (!data) {
            this.notifyService.error('Error al iniciar sesión', 'Usuario y/o contraseña inválidas, verifíque.');
            return;
          }
          if (data.isLocked) {
            this.notifyService.error('Error al iniciar sesión', 'Su usuario esta bloqueado contáctanos al correo info@lafise.com');
            return;
          }
          localStorage.setItem('accessToken', data.logins[0].accessToken || '');
          this.router.navigate(['/admin']);
        });
    }, 1000);
  }

}
