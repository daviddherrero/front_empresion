import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { MyOrdersComponent } from './my-orders/my-orders.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'

const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
