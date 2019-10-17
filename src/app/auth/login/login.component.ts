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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logIn = () => {
    this.authService.logIn(this.data.username, this.data.password)
    .subscribe(res => {
      const data = res;
      if (!data) {
        console.log('No se encontró u');
        return;
      }
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

}
