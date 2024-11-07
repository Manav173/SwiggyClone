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
  selector: 'app-northind4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './northind4.component.html',
  styleUrl: './northind4.component.scss'
})

export class Northind4Component {
  foodItems: FoodItem[] = [
    {
      id: 119,
      name: 'Malai Kofta',
      description: 'Deep-fried vegetable balls served in a rich, creamy gravy.',
      price: 300,
      image: 'malaikofta.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 250
    },
    {
      id: 120,
      name: 'Mutton Korma',
      description: 'Tender mutton cooked in a spiced yogurt-based gravy.',
      price: 480,
      image: 'muttonkorma.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 350
    },
    {
      id: 121,
      name: 'Baingan Bharta',
      description: 'Smoky roasted eggplant mashed and cooked with onions and tomatoes.',
      price: 220,
      image: 'bainganbharta.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 240
    },
    {
      id: 122,
      name: 'Chicken Tikka Masala',
      description: 'Marinated chicken chunks cooked in a spiced tomato gravy.',
      price: 370,
      image: 'chickentikka.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 450
    },
    {
      id: 123,
      name: 'Lassi',
      description: 'A refreshing yogurt-based drink, available sweet or salted.',
      price: 60,
      image: 'lassi.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 380
    },
    {
      id: 124,
      name: 'Gulab Jamun',
      description: 'Soft fried dough balls soaked in sugar syrup.',
      price: 90,
      image: 'gulabjamun.png',
      isVegetarian: true,
      rating: 4.9,
      ratingCount: 420
    },
    {
      id: 125,
      name: 'Rasmalai',
      description: 'Soft paneer balls soaked in sweetened, thickened milk with cardamom.',
      price: 110,
      image: 'rasmalai.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 340
    }
  ];

  buttonPressed: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(foodItem: FoodItem): void {
    this.cartService.addToCart({ ...foodItem, quantity: 1 }); // Adjust quantity as needed
    console.log(`${foodItem.name} added to cart!`);
  }

  goBack() {
    this.router.navigate(['/northres']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
