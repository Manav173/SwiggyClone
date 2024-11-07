import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-restauraant',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './pizza-restauraant.component.html',
  styleUrl: './pizza-restauraant.component.scss'
})
export class PizzaRestauraantComponent {
  constructor(private router: Router) {}
  
  goBack() {
    this.router.navigate(['/']);
  }
}
