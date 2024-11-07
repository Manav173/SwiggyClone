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
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'] 
})
export class PizzaComponent {
  foodItems: FoodItem[] = [
    {
      id: 201,
      name: 'Margherita Pizza',
      description: 'Classic margherita with fresh tomatoes, mozzarella, and basil.',
      price: 300,
      image: 'margherita.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 220
    },
    {
      id: 202,
      name: 'Pepperoni Pizza',
      description: 'Loaded with spicy pepperoni and mozzarella cheese.',
      price: 400,
      image: 'pepperoni.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 410
    },
    {
      id: 203,
      name: 'BBQ Chicken Pizza',
      description: 'Grilled chicken with BBQ sauce, onions, and mozzarella.',
      price: 450,
      image: 'bbqchicken.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 350
    },
    {
      id: 204,
      name: 'Veggie Supreme',
      description: 'A medley of fresh vegetables on a mozzarella base.',
      price: 380,
      image: 'veggiesupreme.png',
      isVegetarian: true,
      rating: 4.3,
      ratingCount: 280
    },
    {
      id: 205,
      name: 'Hawaiian Pizza',
      description: 'Ham and pineapple with mozzarella cheese.',
      price: 390,
      image: 'hawaiian.png',
      isVegetarian: false,
      rating: 4.2,
      ratingCount: 200
    },
    {
      id: 206,
      name: 'Four Cheese Pizza',
      description: 'A blend of mozzarella, cheddar, parmesan, and blue cheese.',
      price: 500,
      image: 'fourcheese.png',
      isVegetarian: true,
      rating: 4.9,
      ratingCount: 300
    },
    {
      id: 207,
      name: 'Mexican Pizza',
      description: 'Topped with jalapenos, onions, and spicy Mexican flavors.',
      price: 420,
      image: 'mexican.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 340
    }
  ];

  buttonPressed: boolean = false; // To track button press state

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(foodItem: FoodItem): void {
    this.cartService.addToCart({ ...foodItem, quantity: 1 }); // Adjust quantity as needed
    console.log(`${foodItem.name} added to cart!`);
  }

  goBack() {
    this.router.navigate(['/pizzares']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }

}
