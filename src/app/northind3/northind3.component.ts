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
  selector: 'app-northind3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './northind3.component.html',
  styleUrl: './northind3.component.scss'
})
export class Northind3Component {
  foodItems: FoodItem[] = [
    {
      id: 113,
      name: 'Butter Chicken',
      description: 'Chicken cooked in a creamy tomato-based gravy with butter and spices.',
      price: 320,
      image: 'butterchicken.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 600
    },
    {
      id: 114,
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese cooked in a rich and creamy tomato-based gravy.',
      price: 280,
      image: 'paneerbm.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 350
    },
    {
      id: 115,
      name: 'Dal Makhani',
      description: 'Slow-cooked black lentils in a creamy, spiced gravy.',
      price: 240,
      image: 'dalmakhani.png',
      isVegetarian: true,
      rating: 4.9,
      ratingCount: 500
    },
    {
      id: 116,
      name: 'Aloo Paratha',
      description: 'Stuffed flatbread filled with spiced mashed potatoes and served with butter or yogurt.',
      price: 120,
      image: 'alooparatha.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 300
    },
    {
      id: 117,
      name: 'Kashmiri Pulao',
      description: 'Aromatic rice dish with nuts, saffron, and dry fruits.',
      price: 270,
      image: 'kashmiripulao.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 280
    },
    {
      id: 118,
      name: 'Tandoori Roti',
      description: 'Traditional whole wheat bread cooked in a tandoor.',
      price: 20,
      image: 'tandooriroti.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 200
    },
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
