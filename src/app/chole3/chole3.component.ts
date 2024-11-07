import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVegetarian: boolean;
  rating: number;        
  ratingCount: number; 
  buttonPressed?: boolean;
}

@Component({
  selector: 'app-chole3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chole3.component.html',
  styleUrl: './chole3.component.scss'
})
export class Chole3Component {
  foodItems: FoodItem[] = [
    {
      id: 413,
      name: 'Chole Bhature with Lassi',
      description: 'Spicy chole with fried bhature, paired with a refreshing sweet lassi.',
      price: 320,
      image: 'cholebhaturelassi.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 330
    },
    {
      id: 414,
      name: 'Chole Bhature with Pickled Vegetables',
      description: 'Chole and bhature served with a side of homemade pickled vegetables.',
      price: 250,
      image: 'cholebhaturepickles.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 210
    }
  ]; 

  buttonPressed: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(foodItem: FoodItem): void {
    this.cartService.addToCart({ ...foodItem, quantity: 1 }); // Adjust quantity as needed
    console.log(`${foodItem.name} added to cart!`);
  }

  goBack() {
    this.router.navigate(['/choleres']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
