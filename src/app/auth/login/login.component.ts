import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logIn = () => {
    console.log(this.data);
    this.router.navigate(['/admin']);
  }

}
