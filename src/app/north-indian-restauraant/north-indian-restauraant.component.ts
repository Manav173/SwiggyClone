import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-north-indian-restauraant',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './north-indian-restauraant.component.html',
  styleUrl: './north-indian-restauraant.component.scss'
})
export class NorthIndianRestauraantComponent {

  constructor(private router: Router) {}
  
  goBack() {
    this.router.navigate(['/']);
  }
}
