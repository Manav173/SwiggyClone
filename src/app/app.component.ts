import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FoodCitiesComponent } from './food-cities/food-cities.component';
import { GroceryCitiesComponent } from './grocery-cities/grocery-cities.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FoodCategoriesComponent,
    GroceriesComponent,
    RestaurantsComponent,
    FoodCitiesComponent,
    GroceryCitiesComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SwiggyApp';
  @ViewChild(NavbarComponent) navbar!: NavbarComponent; // Reference to the NavbarComponent
  isLoggedIn: boolean = false; // Track login state

  constructor(private router: Router) {}

  ngOnInit() {
    // Check the initial login state from local storage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  isFullPageRoute(): boolean {
    const fullPageRoutes = ['/cart', '/northres', '/pizzares','/biryanires', '/choleres','/north', '/north2', '/north3', '/north4', '/pizza', '/pizza2', '/pizza3', '/biryani', '/biryani2', '/biryani3', '/biryani4', '/chole', '/chole2', '/chole3', '/chinese', '/orderhistory'];
    return fullPageRoutes.includes(this.router.url);
  }

  // Method to update the login state in the navbar
  updateLoginState(isLoggedIn: boolean): void {
    if (this.navbar) {
      this.navbar.updateLoginState(isLoggedIn); // Call the method to update login state
      this.isLoggedIn = isLoggedIn; // Update local isLoggedIn state
    }
  }

  // Handle login state change event from the Navbar
  handleLoginStateChange(isLoggedIn: boolean) {
    this.updateLoginState(isLoggedIn); // Update login state
  }
}