import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  register: boolean = false ;
  login_info: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    this.login_info = true;

  }

  want_register(){
      this.register = true;
  }

}
