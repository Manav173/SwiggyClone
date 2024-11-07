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
  selector: 'app-biryani3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biryani3.component.html',
  styleUrl: './biryani3.component.scss'
})

export class Biryani3Component {
  foodItems: FoodItem[] = [
    {
      id: 314,
      name: 'Zafrani Biryani',
      description: 'A royal biryani with a hint of saffron and premium meat.',
      price: 500,
      image: 'zafranibiryani.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 310
    },
    {
      id: 315,
      name: 'Calcutta Biryani',
      description: 'A Kolkata-style biryani made with marinated meat, potatoes, and aromatic rice.',
      price: 430,
      image: 'calcuttabiryani.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 330
    },
    {
      id: 316,
      name: 'Mysore Biryani',
      description: 'A unique blend of spices and flavors from Mysore, served with chicken or mutton.',
      price: 420,
      image: 'mysorebiryani.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 250
    },
    {
      id: 317,
      name: 'Shahjahani Biryani',
      description: 'A rich and aromatic biryani with royal spices, often served with kebabs.',
      price: 550,
      image: 'shahjanibiryani.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 210
    },
    {
      id: 318,
      name: 'Chickpea Biryani',
      description: 'A vegan-friendly biryani with chickpeas and vegetables cooked in traditional spices.',
      price: 320,
      image: 'chickpeabiryani.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 180
    },
    {
      id: 319,
      name: 'Lamb Biryani',
      description: 'Tender lamb pieces slow-cooked with aromatic basmati rice and a blend of spices.',
      price: 490,
      image: 'lambbiryani.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 250
    }
  ];  

  buttonPressed: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(foodItem: FoodItem): void {
    this.cartService.addToCart({ ...foodItem, quantity: 1 }); // Adjust quantity as needed
    console.log(`${foodItem.name} added to cart!`);
  }

  goBack() {
    this.router.navigate(['/biryanires']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
