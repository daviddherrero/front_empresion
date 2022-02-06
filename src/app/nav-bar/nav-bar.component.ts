import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  orders : boolean = false;
  actualOrder : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  myOrders(){
    this.orders = true;
  }

  shoppingCartView(){
    this.actualOrder = true;
  }

}
