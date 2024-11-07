import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NorthindComponent } from './northind/northind.component';
import { Northind2Component } from './northind2/northind2.component';
import { Northind3Component } from './northind3/northind3.component';
import { Northind4Component } from './northind4/northind4.component';
import { PizzaComponent } from './pizza/pizza.component';
import { Pizza2Component } from './pizza2/pizza2.component';
import { Pizza3Component } from './pizza3/pizza3.component';
import { CartComponent } from './cart/cart.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { Biryani2Component } from './biryani2/biryani2.component';
import { Biryani3Component } from './biryani3/biryani3.component';
import { Biryani4Component } from './biryani4/biryani4.component';
import { CholeComponent } from './chole/chole.component';
import { Chole2Component } from './chole2/chole2.component';
import { Chole3Component } from './chole3/chole3.component';
import { ChineseComponent } from './chinese/chinese.component';
import { NorthIndianRestauraantComponent } from './north-indian-restauraant/north-indian-restauraant.component';
import { PizzaRestauraantComponent } from './pizza-restauraant/pizza-restauraant.component';
import { BiryaniRestauraantComponent } from './biryani-restauraant/biryani-restauraant.component';
import { CholeBhatureRestauraantComponent } from './chole-bhature-restauraant/chole-bhature-restauraant.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'cart', component: CartComponent },
    { path: 'north', component: NorthindComponent },
    { path: 'north2', component: Northind2Component },
    { path: 'north3', component: Northind3Component },
    { path: 'north4', component: Northind4Component },
    { path: 'pizza', component: PizzaComponent },
    { path: 'pizza2', component: Pizza2Component },
    { path: 'pizza3', component: Pizza3Component },
    { path: 'biryani', component: BiryaniComponent },
    { path: 'biryani2', component: Biryani2Component },
    { path: 'biryani3', component: Biryani3Component },
    { path: 'biryani4', component: Biryani4Component },
    { path: 'chole', component: CholeComponent },
    { path: 'chole2', component: Chole2Component },
    { path: 'chole3', component: Chole3Component },
    { path: 'chinese', component: ChineseComponent },
    { path: 'northres', component:NorthIndianRestauraantComponent },
    { path: 'biryanires', component: BiryaniRestauraantComponent },
    { path: 'pizzares', component: PizzaRestauraantComponent },
    { path: 'choleres', component: CholeBhatureRestauraantComponent },
    { path: 'orderhistory', component:OrderhistoryComponent }
];
  