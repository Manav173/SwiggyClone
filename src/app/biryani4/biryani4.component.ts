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
  selector: 'app-biryani4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biryani4.component.html',
  styleUrl: './biryani4.component.scss'
})

export class Biryani4Component {
  foodItems: FoodItem[] = [
    {
      id: 320,
      name: 'Tandoori Biryani',
      description: 'Chicken or mutton marinated in tandoori spices, layered with basmati rice.',
      price: 460,
      image: 'tandooribiryani.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 300
    },
    {
      id: 321,
      name: 'Prawn Biryani',
      description: 'Succulent prawns cooked with basmati rice and fragrant spices.',
      price: 550,
      image: 'prawnbiryani.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 280
    },
    {
      id: 322,
      name: 'Thai Biryani',
      description: 'A fusion biryani with Thai spices and a mix of fresh vegetables and meat.',
      price: 440,
      image: 'thaibiryani.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 200
    },
    {
      id: 323,
      name: 'Sindhi Biryani',
      description: 'A spicy and flavorful biryani from Sindh, made with meat and a fiery blend of spices.',
      price: 490,
      image: 'sindhibiryani.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 250
    },
    {
      id: 324,
      name: 'Aloo Biryani',
      description: 'A comforting biryani made with layers of spiced potatoes and rice.',
      price: 300,
      image: 'aloobiryani.png',
      isVegetarian: true,
      rating: 4.4,
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
    this.router.navigate(['/biryanires']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
