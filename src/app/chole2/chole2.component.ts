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
  selector: 'app-chole2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chole2.component.html',
  styleUrl: './chole2.component.scss'
})
export class Chole2Component {
  foodItems: FoodItem[] = [
    {
      id: 406,
      name: 'Classic Chole Bhature',
      description: 'Spicy chickpeas served with fluffy fried bread.',
      price: 180,
      image: 'classiccholebhature.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 210
    },
    {
      id: 407,
      name: 'Paneer Chole Bhature',
      description: 'Chickpeas cooked with paneer in a rich gravy, served with bhature.',
      price: 250,
      image: 'paneercholebhature.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 340
    },
    {
      id: 408,
      name: 'Amritsari Chole Bhature',
      description: 'Famous Amritsari-style chickpeas with crispy bhature.',
      price: 220,
      image: 'amritsaricholebhature.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 280
    },
    {
      id: 409,
      name: 'Chole Bhature Thali',
      description: 'Chole served with bhature, salad, and pickles in a complete thali.',
      price: 300,
      image: 'cholebhaturethali.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 150
    },
    {
      id: 410,
      name: 'Chole Bhature with Aloo',
      description: 'Chickpeas served with bhature and spiced potatoes on the side.',
      price: 230,
      image: 'cholebhaturealoo.png',
      isVegetarian: true,
      rating: 4.4,
      ratingCount: 180
    },
    {
      id: 411,
      name: 'Chole Bhature with Raita',
      description: 'Chickpeas served with bhature and a side of cool raita.',
      price: 260,
      image: 'cholebhatureraita.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 320
    },
    {
      id: 412,
      name: 'Chole Bhature Combo',
      description: 'Chole and bhature with a choice of drink.',
      price: 290,
      image: 'cholebhaturecombo.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 290
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
