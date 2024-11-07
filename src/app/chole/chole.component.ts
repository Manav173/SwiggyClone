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
  selector: 'app-chole',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chole.component.html',
  styleUrl: './chole.component.scss'
})

export class CholeComponent {
  foodItems: FoodItem[] = [
    {
      id: 401,
      name: 'Chole Bhature',
      description: 'Spicy chickpeas served with fluffy fried bread.',
      price: 180,
      image: 'classiccholebhature.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 210
    },
    {
      id: 402,
      name: 'Chole Bhature with Aloo',
      description: 'Chickpeas served with bhature and spiced potatoes on the side.',
      price: 230,
      image: 'cholebhaturealoo.png',
      isVegetarian: true,
      rating: 4.4,
      ratingCount: 180
    },
    {
      id: 403,
      name: 'Chole Bhature with Pulao',
      description: 'Chole served with soft bhature and fragrant rice pulao.',
      price: 280,
      image: 'cholebhaturepulao.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 200
    },
    {
      id: 404,
      name: 'Chole Bhature with Chutney',
      description: 'Chole with crispy bhature, served with tangy chutney on the side.',
      price: 240,
      image: 'cholebhaturechutney.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 250
    },
    {
      id: 405,
      name: 'Chole Bhature with Dahi Bhalla',
      description: 'Chole served with crispy bhature and soft dahi bhalla as a side dish.',
      price: 310,
      image: 'cholebhaturedahibhalla.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 270
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
