import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biryani-restauraant',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './biryani-restauraant.component.html',
  styleUrl: './biryani-restauraant.component.scss'
})
export class BiryaniRestauraantComponent {
  constructor(private router: Router) {}
  
  goBack() {
    this.router.navigate(['/']);
  }
}
