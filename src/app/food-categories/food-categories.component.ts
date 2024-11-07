import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-food-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent {
  currentIndex = 0;
  itemsPerSlide = window.innerWidth < 768 ? 4 : 10; // 4 items for mobile, 10 for larger screens

  products: Product[] = [
    { id: 1, name: 'North Indian', image: 'northIndian.png', link: '/northres' },
    { id: 2, name: 'Pizza', image: 'pizza.png', link: '/pizzares' },
    { id: 3, name: 'Biryani', image: 'biryani.png', link: '/biryanires' },
    { id: 4, name: 'Chole Bhature', image: 'choleBhature.png', link: '/choleres' },
    { id: 5, name: 'Chinese', image: 'chinese.png', link: '/chineseres' },
    { id: 6, name: 'Burger', image: 'burger.png', link: '/burger' },
    { id: 7, name: 'Paratha', image: 'paratha.png', link: '/paratha' },
    { id: 8, name: 'South Indian', image: 'southIndian.png', link: '/south-indian' },
    { id: 9, name: 'Pav Bhaji', image: 'pavBhaji.png', link: '/pav-bhaji' },
    { id: 10, name: 'Shake', image: 'shake.png', link: '/shake' },
    { id: 11, name: 'Pure Veg', image: 'pureVeg.png', link: 'https://example.com/pure-veg' },
    { id: 12, name: 'Noodles', image: 'noodles.png', link: 'https://example.com/noodles' },
    { id: 13, name: 'Dosa', image: 'dosa.png', link: 'https://example.com/dosa' },
    { id: 14, name: 'Pasta', image: 'pasta.png', link: 'https://example.com/pasta' },
    { id: 15, name: 'Rolls', image: 'rolls.png', link: 'https://example.com/rolls' },
    { id: 16, name: 'Cake', image: 'cake.png', link: 'https://example.com/cake' },
    { id: 17, name: 'Salad', image: 'salad.png', link: 'https://example.com/salad' },
    { id: 18, name: 'Rasmalai', image: 'rasmalai.png', link: 'https://example.com/rasmalai' },
    { id: 19, name: 'Pastry', image: 'pastry.png', link: 'https://example.com/pastry' },
    { id: 20, name: 'Poori', image: 'poori.png', link: 'https://example.com/poori' }
  ];

  get visibleProducts(): Product[][] {
    const startIndex = this.currentIndex * this.itemsPerSlide;
    const currentSlideProducts = this.products.slice(startIndex, startIndex + this.itemsPerSlide);
    const firstRow = currentSlideProducts.slice(0, this.itemsPerSlide / 2);
    const secondRow = currentSlideProducts.slice(this.itemsPerSlide / 2, this.itemsPerSlide);

    return [firstRow, secondRow];
  }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < Math.floor(this.products.length / this.itemsPerSlide)) {
      this.currentIndex++;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.itemsPerSlide = event.target.innerWidth < 768 ? 4 : 10;
  }
}