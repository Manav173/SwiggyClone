import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  phoneNumber: string = '';
  name: string = '';
  email: string = '';
  apiUrl: string = 'https://6729b8b46d5fa4901b6e1247.mockapi.io/Auth';
  isSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{10}$/; // Adjust as per phone format, e.g., 10 digits
    return phoneRegex.test(phone);
  }

  checkPhoneNumberExists(): Promise<boolean> {
    return this.http.get<any[]>(this.apiUrl).toPromise().then(users => {
      // Check if users is defined and is an array
      if (Array.isArray(users)) {
        return users.some(user => user.contactno === parseInt(this.phoneNumber));
      }
      return false; // Return false if users is not an array
    }).catch(() => {
      return false; // Return false in case of an error (like network error)
    });
  }
  

  async login() {
    this.errorMessage = '';

    if (!this.name || !this.email || !this.phoneNumber) {
      this.errorMessage = 'Please fill in all required fields';
      this.isSuccess = false;
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      this.isSuccess = false;
      return;
    }

    if (!this.validatePhoneNumber(this.phoneNumber)) {
      this.errorMessage = 'Please enter a valid 10-digit phone number';
      this.isSuccess = false;
      return;
    }

    // Check if the phone number already exists
    const phoneExists = await this.checkPhoneNumberExists();
    if (phoneExists) {
      this.router.navigate(['/login'], { queryParams: { message: 'Number already registered' } });
      return;
    }

    const formData = {
      name: this.name,
      emailid: this.email,
      contactnumber: parseInt(this.phoneNumber),
    };

    // Submit the form data to the MockAPI
    this.http.post(this.apiUrl, formData).subscribe({
      next: () => {
        this.isSuccess = true;
        this.errorMessage = 'Form Submitted Successfully';
        setTimeout(() => {
          this.router.navigate(['/login']); // Navigate to /login route
        }, 1500); // Redirect after a short delay
      },
      error: () => {
        this.isSuccess = false;
        this.errorMessage = 'Submission Failed';
      }
    });
  }
}
