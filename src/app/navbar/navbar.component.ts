import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMobileMenuOpen = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  // Method to update login state
  updateLoginState(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  @Output() loginStateChange = new EventEmitter<boolean>();

  // Emit the new login state
  toggleLoginState(isLoggedIn: boolean): void {
    this.loginStateChange.emit(isLoggedIn);
  }
}
