import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  phoneNumber: string = '';
  message: string = '';
  apiUrl: string = 'https://6729b8b46d5fa4901b6e1247.mockapi.io/Auth';

  @Output() loginStateChange = new EventEmitter<boolean>(); // Emit login state change
  @Output() closeModalEvent = new EventEmitter<void>(); // Emit close modal event

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Subscribe to route query parameters to display any messages
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.message = params['message'];
      }
    });
  }

  login() {
    // Validate phone number input
    if (!this.phoneNumber) {
      this.message = 'Please enter your phone number.';
      return;
    }

    // Attempt to log in by checking if the phone number exists in the API
    this.http.get<any[]>(this.apiUrl).subscribe(
      (users) => {
        // Find the user based on the input phone number
        const user = users.find((u) => u.contactnumber === parseInt(this.phoneNumber));

        if (user) {
          // Store user details in localStorage
          const userDetails = {
            id: user.id,
            contactnumber: user.contactnumber,
            name: user.name,
            emailid: user.emailid,
            orderH: user.orderH,
          };
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          console.log('Logging in with phone:', this.phoneNumber);
          this.message = 'Login successful!';
          
          // Update local storage to reflect login status
          localStorage.setItem('isLoggedIn', 'true');
          this.loginStateChange.emit(true); // Emit successful login state

          // Redirect to the main website (replace '/home' with your desired route)
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        } else {
          // Handle case where user is not found
          this.message = 'User not found. Please try again.';
          this.router.navigate(['/signup']);
        }
      },
      (error) => {
        // Handle HTTP errors
        console.error('Login API error:', error);
        this.message = 'An error occurred while logging in. Please try again later.';
      }
    );
  }

  // Method to close the modal
  closeModal() {
    this.phoneNumber = ''; // Reset phone number
    this.message = ''; // Clear any messages
    this.closeModalEvent.emit(); // Emit event to close modal
  }
}
