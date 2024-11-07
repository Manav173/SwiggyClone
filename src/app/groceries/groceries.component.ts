import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Product {
  id: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent {
  products: Product[] = [
    { id: 1, category: 'Fresh Vegetables', image: 'vegetables.png' },
    { id: 2, category: 'Fresh Fruits', image: 'fruits.png' },
    { id: 3, category: 'Dairy', image: 'dairy.png' },
    { id: 4, category: 'Rice & Grains', image: 'rice.png' },
    { id: 5, category: 'Dry Fruits', image: 'dryfruits.png' },
    { id: 6, category: 'Oil', image: 'oil.png' },
    { id: 7, category: 'Chips', image: 'chips.png' },
    { id: 8, category: 'Desserts', image: 'deserts.png' },
    { id: 9, category: 'Drinks', image: 'drinks.png' },
    { id: 10, category: 'Biscuit', image: 'biscuit.png' },
    { id: 11, category: 'Instant Snaks', image: 'instantSnacks.png' },
    { id: 12, category: 'Meat', image: 'meat.png' }
  ];

  currentIndex = 0;
  itemsPerPage = 6; // Default to 6 for larger screens

  constructor() {
    this.updateItemsPerPage(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage(event.target.innerWidth);
  }

  private updateItemsPerPage(width: number): void {
    this.itemsPerPage = width < 768 ? 4 : 6; // Adjust items based on screen width
  }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage; // Decrease by itemsPerPage
      if (this.currentIndex < 0) {
        this.currentIndex = 0; // Prevent going below zero
      }
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.products.length - this.itemsPerPage) {
      this.currentIndex += this.itemsPerPage; // Increase by itemsPerPage
    }
  }

  get visibleProducts(): Product[] {
    return this.products.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }
}
