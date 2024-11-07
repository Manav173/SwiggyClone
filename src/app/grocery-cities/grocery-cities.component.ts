import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface City {
  name: string;
  link: string;
}

@Component({
  selector: 'app-grocery-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery-cities.component.html',
  styleUrl: './grocery-cities.component.scss'
})
export class GroceryCitiesComponent {
  private allCities: City[] = [
    { name: 'Bangalore', link: 'https://www.swiggy.com/instamart/city/bangalore' },
    { name: 'Gurgaon', link: 'https://www.swiggy.com/instamart/city/gurgaon' },
    { name: 'Hyderabad', link: 'https://www.swiggy.com/instamart/city/hyderabad' },
    { name: 'Delhi', link: 'https://www.swiggy.com/instamart/city/delhi' },
    { name: 'Mumbai', link: 'https://www.swiggy.com/instamart/city/mumbai' },
    { name: 'Pune', link: 'https://www.swiggy.com/instamart/city/pune' },
    { name: 'Kolkata', link: 'https://www.swiggy.com/instamart/city/kolkata' },
    { name: 'Chennai', link: 'https://www.swiggy.com/instamart/city/chennai' },
    { name: 'Ahmedabad', link: 'https://www.swiggy.com/instamart/city/ahmedabad' },
    { name: 'Chandigarh', link: 'https://www.swiggy.com/instamart/city/chandigarh' },
    { name: 'Jaipur', link: 'https://www.swiggy.com/instamart/city/jaipur' },
    { name: 'Kochi', link: 'https://www.swiggy.com/instamart/city/kochi' },
    { name: 'Coimbatore', link: 'https://www.swiggy.com/instamart/city/coimbatore' },
    { name: 'Lucknow', link: 'https://www.swiggy.com/instamart/city/lucknow' },
    { name: 'Nagpur', link: 'https://www.swiggy.com/instamart/city/nagpur' },
    { name: 'Vadodara', link: 'https://www.swiggy.com/instamart/city/vadodara' },
    { name: 'Indore', link: 'https://www.swiggy.com/instamart/city/indore' },
    { name: 'Guwahati', link: 'https://www.swiggy.com/instamart/city/guwahati' },
    { name: 'Vizag', link: 'https://www.swiggy.com/instamart/city/vizag' },
    { name: 'Surat', link: 'https://www.swiggy.com/instamart/city/surat' },
    { name: 'Dehradun', link: 'https://www.swiggy.com/instamart/city/dehradun' },
    { name: 'Noida', link: 'https://www.swiggy.com/instamart/city/noida' },
    { name: 'Ludhiana', link: 'https://www.swiggy.com/instamart/city/ludhiana' },
    { name: 'Trichy', link: 'https://www.swiggy.com/instamart/city/trichy' },
    { name: 'Vijayawada', link: 'https://www.swiggy.com/instamart/city/vijayawada' },
    { name: 'Kanpur', link: 'https://www.swiggy.com/instamart/city/kanpur' },
    { name: 'Mysore', link: 'https://www.swiggy.com/instamart/city/mysore' },
    { name: 'Nashik', link: 'https://www.swiggy.com/instamart/city/nashik' },
    { name: 'Udaipur', link: 'https://www.swiggy.com/instamart/city/udaipur' },
    { name: 'Pondicherry', link: 'https://www.swiggy.com/instamart/city/pondicherry' },
    { name: 'Agra', link: 'https://www.swiggy.com/instamart/city/agra' },
    { name: 'Aurangabad', link: 'https://www.swiggy.com/instamart/city/aurangabad' },
    { name: 'Jalandhar', link: 'https://www.swiggy.com/instamart/city/jalandhar' },
    { name: 'Kota', link: 'https://www.swiggy.com/instamart/city/kota' },
    { name: 'Madurai', link: 'https://www.swiggy.com/instamart/city/madurai' },
    { name: 'Allahabad', link: 'https://www.swiggy.com/instamart/city/allahabad' },
    { name: 'Manipal', link: 'https://www.swiggy.com/instamart/city/manipal' },
    { name: 'Amritsar', link: 'https://www.swiggy.com/instamart/city/amritsar' },
    { name: 'Bareilly', link: 'https://www.swiggy.com/instamart/city/bareilly' },
    { name: 'Meerut', link: 'https://www.swiggy.com/instamart/city/meerut' }
  ];

  showAll = false;

  get visibleCities(): City[] {
    return this.showAll ? this.allCities : this.allCities.slice(0, 11);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
