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
  selector: 'app-biryani',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biryani.component.html',
  styleUrl: './biryani.component.scss'
})

export class BiryaniComponent {
  foodItems: FoodItem[] = [
    {
      id: 301,
      name: 'Vegetable Biryani',
      description: 'Aromatic basmati rice cooked with mixed vegetables and spices.',
      price: 220,
      image: 'vegetablebiryani.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 210
    },
    {
      id: 302,
      name: 'Chicken Biryani',
      description: 'Marinated chicken layered with fragrant basmati rice and spices.',
      price: 350,
      image: 'chickenbiryani.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 340
    },
    {
      id: 303,
      name: 'Mutton Biryani',
      description: 'Tender mutton pieces slow-cooked with basmati rice and spices.',
      price: 450,
      image: 'muttonbiryani.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 280
    },
    {
      id: 304,
      name: 'Paneer Biryani',
      description: 'Delicious paneer cooked with aromatic spices and basmati rice.',
      price: 300,
      image: 'paneerbiryani.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 150
    },
    {
      id: 305,
      name: 'Egg Biryani',
      description: 'Flavorful biryani with boiled eggs and aromatic spices.',
      price: 280,
      image: 'eggbiryani.png',
      isVegetarian: false,
      rating: 4.4,
      ratingCount: 180
    },
    {
      id: 306,
      name: 'Hyderabadi Biryani',
      description: 'Classic Hyderabadi biryani made with marinated meat and basmati rice.',
      price: 400,
      image: 'hyderabadibiryani.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 400
    },
    {
      id: 307,
      name: 'Kashmiri Dum Biryani',
      description: 'Aromatic rice layered with flavorful meat and spices from Kashmir.',
      price: 480,
      image: 'kashmiridumbiryani.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 320
    },
    {
      id: 308,
      name: 'Chettinad Biryani',
      description: 'Spicy and fragrant biryani made with traditional Chettinad spices.',
      price: 390,
      image: 'chettinadbiryani.png',
      isVegetarian: false,
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
    this.router.navigate(['/biryanires']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
