import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirm_password: string;
  login: boolean = false;
  register_info: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirm_password);
    this.register_info = true;
  }

  want_login(){
    this.login = true;
  }

}
