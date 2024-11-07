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
  selector: 'app-biryani2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biryani2.component.html',
  styleUrl: './biryani2.component.scss'
})

export class Biryani2Component {
  foodItems: FoodItem[] = [
    {
      id: 309,
      name: 'Malabar Biryani',
      description: 'Fragrant rice with chicken or mutton, cooked with a unique blend of Malabar spices.',
      price: 420,
      image: 'malabarbiryani.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 250
    },
    {
      id: 310,
      name: 'Lucknowi Biryani',
      description: 'Aromatic basmati rice with rich Lucknowi flavors and marinated meat.',
      price: 460,
      image: 'lucknowibiryani.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 320
    },
    {
      id: 311,
      name: 'Bombay Biryani',
      description: 'Aromatic rice cooked with spiced chicken, often garnished with crispy fried onions.',
      price: 380,
      image: 'bombaybiryani.png',
      isVegetarian: false,
      rating: 4.5,
      ratingCount: 330
    },
    {
      id: 312,
      name: 'Andhra Biryani',
      description: 'Spicy biryani with chicken, cooked with Andhra-style spices and flavors.',
      price: 400,
      image: 'andhrabiryani.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 270
    },
    {
      id: 313,
      name: 'Schezwan Biryani',
      description: 'A fusion of Chinese Schezwan sauce with aromatic basmati rice and meat of choice.',
      price: 370,
      image: 'schezwanbiryani.png',
      isVegetarian: false,
      rating: 4.5,
      ratingCount: 190
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
