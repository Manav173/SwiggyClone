import { Injectable } from '@angular/core';


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if item already exists
    } else {
      this.cartItems.push({ ...item, quantity: item.quantity }); // Add new item
    }
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(i => i.id !== itemId);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
