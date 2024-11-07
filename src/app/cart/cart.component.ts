import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity < 1) {
      this.removeItem(item);
    } else {
      this.cartService.updateQuantity(item.id, quantity);
      this.calculateTotal();
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
    this.cartItems = this.cartService.getCartItems(); 
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.cartService.calculateTotal();
  }

  checkout(): void {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    const userPhone = userDetails.contactnumber;
    console.log('User Details:', userDetails);

    if (userPhone) {
      this.http
        .get<any[]>(`https://6729b8b46d5fa4901b6e1247.mockapi.io/Auth`)
        .subscribe(
          (users) => {
            const user = users.find((u) => u.contactnumber === userPhone);

            if (user) {
              const newOrder = {
                date: new Date().toISOString(),
                items: this.cartItems,
                totalPrice: this.totalPrice,
              };

              const updatedOrderHistory = [...user.orderH, newOrder];

              this.http
                .put(
                  `https://6729b8b46d5fa4901b6e1247.mockapi.io/Auth/${user.id}`,
                  {orderH: updatedOrderHistory }
                )
                .subscribe(
                  () => {
                    this.cartService.clearCart();
                    this.router.navigate(['/cart']).then(() => {
                      window.location.reload();
                    });;
                  },
                  (err) => {
                    console.error('Error updating order history:', err);
                  }
                );
            } else {
              console.error('User not found');
            }
          },
          (err) => {
            console.error('Error fetching users:', err);
          }
        );
    } else {
      console.error('User phone number not found in localStorage');
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  viewOrderHistory(): void {
    this.router.navigate(['/orderhistory']);
  }
}
