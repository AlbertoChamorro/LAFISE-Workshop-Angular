import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logIn = () => {
    console.log(this.data);
    // http://localhost:9000/api/users?_embed=logins&username=achamorro&password=123456?is_unique=true
    this.router.navigate(['/admin']);
  }

}
