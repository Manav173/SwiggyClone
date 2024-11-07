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
  selector: 'app-pizza3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza3.component.html',
  styleUrl: './pizza3.component.scss'
})

export class Pizza3Component {
  foodItems: FoodItem[] = [
    {
      id: 213,
      name: 'Farmhouse Pizza',
      description: 'A delicious mix of fresh veggies like capsicum, onions, and tomatoes.',
      price: 390,
      image: 'farmhouse.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 310
    },
    {
      id: 214,
      name: 'Smoked Sausage Pizza',
      description: 'Juicy smoked sausages with a spicy tomato base and mozzarella.',
      price: 470,
      image: 'smokedsausage.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 380
    },
    {
      id: 215,
      name: 'Garlic Parmesan Pizza',
      description: 'Aromatic garlic butter base with parmesan and mozzarella.',
      price: 370,
      image: 'garlicparmesan.png',
      isVegetarian: true,
      rating: 4.3,
      ratingCount: 190
    },
    {
      id: 216,
      name: 'Mediterranean Pizza',
      description: 'Topped with olives, feta cheese, cherry tomatoes, and herbs.',
      price: 420,
      image: 'mediterranean.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 280
    },
    {
      id: 217,
      name: 'Spinach and Ricotta Pizza',
      description: 'Creamy ricotta, fresh spinach, and mozzarella on a thin crust.',
      price: 380,
      image: 'spinachricotta.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 230
    },
    {
      id: 218,
      name: 'Pesto Veggie Pizza',
      description: 'Basil pesto sauce topped with zucchini, bell peppers, and cheese.',
      price: 410,
      image: 'pestoveggie.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 270
    },
    {
      id: 219,
      name: 'Seafood Pizza',
      description: 'Shrimps, calamari, and a hint of garlic on a cheesy base.',
      price: 550,
      image: 'seafood.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 290
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
