import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Ensure HttpClientModule is imported
import { Observable } from 'rxjs';  // To handle asynchronous operations

@Component({
  selector: 'app-orderhistory',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  providers: [DatePipe],
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
  orderHistory: any[] = []; // Array to hold the user's order history
  totalPrice: number = 0; // Variable to hold the total price of all orders

  constructor(private router: Router, private http: HttpClient, public datePipe: DatePipe ) {}

  ngOnInit(): void {
    // Retrieve contact number from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    const contactNumber = userDetails.contactnumber;
    
    if (contactNumber) {
      // If contact number exists in localStorage, fetch user details from the API
      this.getUserDetails(contactNumber).subscribe(
        (users) => {
          // Find the user with the matching contact number
          const user = users.find((u) => u.contactnumber === contactNumber);
          
          // If user details are found, assign the order history and calculate total price
          if (user && user.orderH) {
            this.orderHistory = user.orderH;
            this.calculateTotalPrice();
          } else {
            console.error('No order history found for this user');
          }
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('Contact number not found in localStorage');
    }
  }

  // Function to get user details from the API using the contact number
  getUserDetails(contactNumber: string): Observable<any[]> {
    const apiUrl = `https://6729b8b46d5fa4901b6e1247.mockapi.io/Auth`;  // Ensure this is correct API endpoint
    return this.http.get<any[]>(apiUrl);  // Make GET request to fetch user details
  }

  // Function to calculate the total price of all orders
  calculateTotalPrice(): void {
    this.totalPrice = this.orderHistory.reduce((acc, order) => acc + order.totalPrice, 0);
  }

  // Function to handle navigation back to the homepage
  goBack(): void {
    this.router.navigate(['/']);  // Adjust the route as per your requirements
  }
}
