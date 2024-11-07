import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  image: string;
  cuisine: string[];
  location: string;
  distance: string;
  price: string;
  features: string[];
  mainOffer: string;
  additionalOffers: number;
  bankOffer: string;
  url: string;
}

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'] // Fixed from styleUrl to styleUrls
})

export class RestaurantsComponent {
  currentIndex = 0;
  itemsPerSlide = 3; // Default items per slide

  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Ce La Vie Kitchen & Bar',
      rating: 4.2,
      image: 'restaurant1.png',
      cuisine: ['Asian', 'Continental'],
      location: 'Connaught Place, Delhi',
      distance: '4.5 km',
      price: '₹2300 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 35% off on pre-booking',
      additionalOffers: 3,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/782639/dineout'
    },
    {
      id: 2,
      name: 'The Embassy',
      rating: 4.1,
      image: 'restaurant2.png',
      cuisine: ['European', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '3.8 km',
      price: '₹1800 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 15% off on walk-in',
      additionalOffers: 1,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/9086/dineout'
    },
    {
      id: 3,
      name: 'My Bar Square',
      rating: 4.0,
      image: 'restaurant3.png',
      cuisine: ['Finger Food', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '4.2 km',
      price: '₹2000 for two',
      features: ['Table booking', 'Free Dessert'],
      mainOffer: 'Flat 15% off on pre-booking',
      additionalOffers: 2,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/53028/dineout'
    },
    {
      id: 4,
      name: 'DR Zombie',
      rating: 4.5,
      image: 'restaurant4.png',
      cuisine: ['Italian', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '4 km',
      price: '₹2400 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 25% off on walk-in',
      additionalOffers: 1,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/317735/dineout'
    },
    {
      id: 5,
      name: 'The Host',
      rating: 3.9,
      image: 'restaurant5.png',
      cuisine: ['Mughlai', 'Seafood'],
      location: 'F-Block, Connaught Place, Delhi',
      distance: '4 km',
      price: '₹1800 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 15% off on walk-in',
      additionalOffers: 1,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/599387/dineout'
    },
    {
      id: 6,
      name: 'Zaffran',
      rating: 4.4,
      image: 'restaurant6.png',
      cuisine: ['Mughlai', 'North Indian'],
      location: 'Hotel Palace Heights, Delhi',
      distance: '3.7 km',
      price: '₹3200 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 15% off on walk-in',
      additionalOffers: 1,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/33378/dineout'
    },
    {
      id: 7,
      name: 'Dhaba Estd 1986 Delhi',
      rating: 3.8,
      image: 'restaurant7.png',
      cuisine: ['Mughlai', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '4 km',
      price: '₹1600 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 30% off on pre-booking',
      additionalOffers: 6,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/dhaba-estd-1986-delhi-connaught-place-connaught-place-293667/dineout'
    },
    {
      id: 8,
      name: 'Cafe Hawkers',
      rating: 4.4,
      image: 'restaurant8.png',
      cuisine: ['Continental', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '3.8 km',
      price: '₹800 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 30% off on pre-booking',
      additionalOffers: 2,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/33615/dineout'
    },
    {
      id: 9,
      name: 'Warehouse Cafe',
      rating: 4.1,
      image: 'restaurant9.png',
      cuisine: ['Asian', 'North Indian'],
      location: 'Connaught Place, Delhi',
      distance: '3.8 km',
      price: '₹2500 for two',
      features: ['Table booking'],
      mainOffer: 'Flat 15% off on walk-in',
      additionalOffers: 1,
      bankOffer: 'Up to 15% off with bank offers',
      url: 'https://www.swiggy.com/restaurants/warehouse-cafe-connaught-place-connaught-place-16324/dineout/menu'
    }
  ];

  constructor() {
    this.updateItemsPerSlide(window.innerWidth);
  }

  get visibleRestaurants(): Restaurant[] {
    const startIndex = this.currentIndex * this.itemsPerSlide;
    return this.restaurants.slice(startIndex, startIndex + this.itemsPerSlide);
  }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    // Updated condition for nextSlide logic
    if (this.currentIndex < Math.floor((this.restaurants.length - 1) / this.itemsPerSlide)) {
      this.currentIndex++;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.updateItemsPerSlide(width);
  }

  private updateItemsPerSlide(width: number) {
    this.itemsPerSlide = width < 768 ? 2 : 3; // 2 items on mobile, 3 on larger screens
    this.currentIndex = Math.min(this.currentIndex, Math.floor((this.restaurants.length - 1) / this.itemsPerSlide)); // Ensure currentIndex is valid
  }
}