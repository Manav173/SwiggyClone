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
  selector: 'app-northind2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './northind2.component.html',
  styleUrl: './northind2.component.scss'
})
export class Northind2Component {
  foodItems: FoodItem[] = [
    {
      id: 108,
      name: 'Kadai Paneer',
      description: 'Cottage cheese cooked with capsicum in a spiced tomato gravy.',
      price: 270,
      image: 'kadaipaneer.png',
      isVegetarian: true,
      rating: 4.7,
      ratingCount: 250
    },
    {
      id: 109,
      name: 'Tandoori Chicken',
      description: 'Marinated chicken roasted in a traditional tandoor.',
      price: 400,
      image: 'tandoorichicken.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 500
    },
    {
      id: 110,
      name: 'Bhindi Masala',
      description: 'Okra stir-fried with onions, tomatoes, and spices.',
      price: 180,
      image: 'bhindimasala.png',
      isVegetarian: true,
      rating: 4.4,
      ratingCount: 200
    },
    {
      id: 111,
      name: 'Rogan Josh',
      description: 'Slow-cooked lamb curry with aromatic spices.',
      price: 450,
      image: 'roganjosh.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 320
    },
    {
      id: 112,
      name: 'Rajma Chawal',
      description: 'Kidney beans in spiced gravy served with steamed rice.',
      price: 220,
      image: 'rajmachawal.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 280
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
