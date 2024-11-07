import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface City {
  name: string;
  link: string;
}

@Component({
  selector: 'app-food-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-cities.component.html',
  styleUrls: ['./food-cities.component.scss'] // Fixed from styleUrl to styleUrls
})
export class FoodCitiesComponent {
  private allCities: City[] = [
    { name: 'Bangalore', link: 'https://www.swiggy.com/city/bangalore' },
    { name: 'Gurgaon', link: 'https://www.swiggy.com/city/gurgaon' },
    { name: 'Hyderabad', link: 'https://www.swiggy.com/city/hyderabad' },
    { name: 'Delhi', link: 'https://www.swiggy.com/city/delhi' },
    { name: 'Mumbai', link: 'https://www.swiggy.com/city/mumbai' },
    { name: 'Pune', link: 'https://www.swiggy.com/city/pune' },
    { name: 'Kolkata', link: 'https://www.swiggy.com/city/kolkata' },
    { name: 'Chennai', link: 'https://www.swiggy.com/city/chennai' },
    { name: 'Ahmedabad', link: 'https://www.swiggy.com/city/ahmedabad' },
    { name: 'Chandigarh', link: 'https://www.swiggy.com/city/chandigarh' },
    { name: 'Jaipur', link: 'https://www.swiggy.com/city/jaipur' },
    { name: 'Kochi', link: 'https://www.swiggy.com/city/kochi' },
    { name: 'Coimbatore', link: 'https://www.swiggy.com/city/coimbatore' },
    { name: 'Lucknow', link: 'https://www.swiggy.com/city/lucknow' },
    { name: 'Nagpur', link: 'https://www.swiggy.com/city/nagpur' },
    { name: 'Vadodara', link: 'https://www.swiggy.com/city/vadodara' },
    { name: 'Indore', link: 'https://www.swiggy.com/city/indore' },
    { name: 'Guwahati', link: 'https://www.swiggy.com/city/guwahati' },
    { name: 'Vizag', link: 'https://www.swiggy.com/city/vizag' },
    { name: 'Surat', link: 'https://www.swiggy.com/city/surat' },
    { name: 'Dehradun', link: 'https://www.swiggy.com/city/dehradun' },
    { name: 'Noida', link: 'https://www.swiggy.com/city/noida' },
    { name: 'Ludhiana', link: 'https://www.swiggy.com/city/ludhiana' },
    { name: 'Trichy', link: 'https://www.swiggy.com/city/trichy' },
    { name: 'Vijayawada', link: 'https://www.swiggy.com/city/vijayawada' },
    { name: 'Kanpur', link: 'https://www.swiggy.com/city/kanpur' },
    { name: 'Mysore', link: 'https://www.swiggy.com/city/mysore' },
    { name: 'Nashik', link: 'https://www.swiggy.com/city/nashik' },
    { name: 'Udaipur', link: 'https://www.swiggy.com/city/udaipur' },
    { name: 'Pondicherry', link: 'https://www.swiggy.com/city/pondicherry' },
    { name: 'Agra', link: 'https://www.swiggy.com/city/agra' },
    { name: 'Aurangabad', link: 'https://www.swiggy.com/city/aurangabad' },
    { name: 'Jalandhar', link: 'https://www.swiggy.com/city/jalandhar' },
    { name: 'Kota', link: 'https://www.swiggy.com/city/kota' },
    { name: 'Madurai', link: 'https://www.swiggy.com/city/madurai' },
    { name: 'Allahabad', link: 'https://www.swiggy.com/city/allahabad' },
    { name: 'Manipal', link: 'https://www.swiggy.com/city/manipal' },
    { name: 'Amritsar', link: 'https://www.swiggy.com/city/amritsar' },
    { name: 'Bareilly', link: 'https://www.swiggy.com/city/bareilly' },
    { name: 'Meerut', link: 'https://www.swiggy.com/city/meerut' }
  ];

  showAll = false;

  get visibleCities(): City[] {
    return this.showAll ? this.allCities : this.allCities.slice(0, 11);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
