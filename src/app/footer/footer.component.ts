import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface City {
  name: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  majorCities: City[] = [
    { name: 'Bangalore' },
    { name: 'Gurgaon' },
    { name: 'Hyderabad' },
    { name: 'Delhi' },
    { name: 'Mumbai' },
    { name: 'Pune' }
  ];
}
