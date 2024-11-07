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
  selector: 'app-northind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './northind.component.html',
  styleUrl: './northind.component.scss'
})
export class NorthindComponent {
  foodItems: FoodItem[] = [
    {
      id: 101,
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese cooked in a rich tomato-based gravy.',
      price: 250,
      image: 'paneerbm.png',
      isVegetarian: true,
      rating: 4.5,
      ratingCount: 210
    },
    {
      id: 102,
      name: 'Chicken Tikka',
      description: 'Grilled marinated chicken pieces, served with mint chutney.',
      price: 350,
      image: 'chickentikka.png',
      isVegetarian: false,
      rating: 4.7,
      ratingCount: 340
    },
    {
      id: 103,
      name: 'Dal Makhani',
      description: 'Slow-cooked black lentils in creamy spiced gravy.',
      price: 200,
      image: 'dalmakhani.png',
      isVegetarian: true,
      rating: 4.6,
      ratingCount: 280
    },
    {
      id: 104,
      name: 'Mutton Rogan Josh',
      description: 'Aromatic lamb curry with spices and Kashmiri red chilies.',
      price: 450,
      image: 'muttonroganjosh.png',
      isVegetarian: false,
      rating: 4.8,
      ratingCount: 150
    },
    {
      id: 105,
      name: 'Aloo Gobi',
      description: 'Potato and cauliflower cooked with spices and herbs.',
      price: 180,
      image: 'aloogobi.png',
      isVegetarian: true,
      rating: 4.3,
      ratingCount: 180
    },
    {
      id: 106,
      name: 'Butter Chicken',
      description: 'Tender chicken in a creamy tomato-based sauce.',
      price: 400,
      image: 'butterchicken.png',
      isVegetarian: false,
      rating: 4.9,
      ratingCount: 400
    },
    {
      id: 107,
      name: 'Fish Amritsari',
      description: 'Crispy batter-fried fish with spices.',
      price: 380,
      image: 'fishamritsari.png',
      isVegetarian: false,
      rating: 4.4,
      ratingCount: 320
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