import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private data: any = {
    username: '',
    password: ''
  };

  public isLoading: boolean;

  constructor(private router: Router, private authService: AuthService) {
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
          const data = res;
          if (!data) {
            console.log('No se encontró');
            return;
          }
          console.log(data);
          this.router.navigate(['/admin']);
        });
    }, 1500);
  }

}
