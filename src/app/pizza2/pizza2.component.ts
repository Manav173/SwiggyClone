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
  selector: 'app-pizza2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza2.component.html',
  styleUrl: './pizza2.component.scss'
})

export class Pizza2Component {
  foodItems: FoodItem[] = [
    {
      id: 208,
      name: 'Cheese Burst Pizza',
      description: 'Rich cheese-filled crust topped with mozzarella and oregano.',
      price: 350,
      image: 'cheeseburst.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 280
    },
    {
      id: 209,
      name: 'Tandoori Paneer Pizza',
      description: 'Tangy tandoori paneer with capsicum, onions, and a spicy sauce.',
      price: 400,
      image: 'tandooripaneer.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 320
    },
    {
      id: 210,
      name: 'Spicy Peri Peri Pizza',
      description: 'Loaded with fiery peri peri chicken and mozzarella cheese.',
      price: 450,
      image: 'periperi.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 400
    },
    {
      id: 211,
      name: 'Mushroom Delight Pizza',
      description: 'Sautéed mushrooms, garlic, and fresh herbs on a cheesy base.',
      price: 380,
      image: 'mushroomdelight.png',
      isVegetarian: true,
      rating: 4.4,
      ratingCount: 260
    },
    {
      id: 212,
      name: 'Chicken Tikka Pizza',
      description: 'Marinated chicken tikka chunks with onions and coriander.',
      price: 420,
      image: 'chickentikkap.png',
      isVegetarian: false,
      rating: 4.5,
      ratingCount: 370
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
