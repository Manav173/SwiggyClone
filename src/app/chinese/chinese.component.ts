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
  selector: 'app-chinese',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chinese.component.html',
  styleUrl: './chinese.component.scss'
})
export class ChineseComponent {
  foodItems: FoodItem[] = [
    {
      id: 31,
      name: 'Vegetable Manchurian',
      description: 'Deep-fried vegetable balls tossed in a spicy Manchurian sauce.',
      price: 200,
      image: 'vegetablemanchurian.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 210
    },
    {
      id: 32,
      name: 'Chicken Chow Mein',
      description: 'Stir-fried noodles with chicken, vegetables, and soy sauce.',
      price: 300,
      image: 'chickenchowmein.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 340
    },
    {
      id: 33,
      name: 'Paneer Tikka',
      description: 'Grilled paneer marinated in spices and served with chutney.',
      price: 250,
      image: 'paneertikka.png',
      isVegetarian: true,
      rating: 4.8,
      ratingCount: 280
    },
    {
      id: 34,
      name: 'Egg Fried Rice',
      description: 'Fragrant rice stir-fried with eggs and vegetables.',
      price: 220,
      image: 'eggfriedrice.png',
      isVegetarian: false,
      rating: 4.6,
      ratingCount: 150
    },
    {
      id: 35,
      name: 'Veg Hakka Noodles',
      description: 'Stir-fried noodles with mixed vegetables and sauces.',
      price: 240,
      image: 'veghakkanoodles.png',
      isVegetarian: true,
      rating: 4.4,
      ratingCount: 180
    },
    {
      id: 36,
      name: 'Chili Chicken',
      description: 'Spicy chicken tossed with bell peppers and onions.',
      price: 350,
      image: 'chilichicken.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 400
    },
    {
      id: 37,
      name: 'Sweet and Sour Tofu',
      description: 'Tofu cooked in a tangy sweet and sour sauce with vegetables.',
      price: 270,
      image: 'sweetandsourtofu.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 320
    },
    {
      id: 38,
      name: 'Prawn Dumplings',
      description: 'Delicate dumplings filled with seasoned prawns.',
      price: 380,
      image: 'prawndumplings.png',
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
    this.router.navigate(['/']);
  }

  toggleButtonState(foodItem: FoodItem, state: boolean) {
    foodItem.buttonPressed = state;
  }
}
