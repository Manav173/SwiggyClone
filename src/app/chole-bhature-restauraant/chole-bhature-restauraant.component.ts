import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chole-bhature-restauraant',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './chole-bhature-restauraant.component.html',
  styleUrl: './chole-bhature-restauraant.component.scss'
})
export class CholeBhatureRestauraantComponent {
  constructor(private router: Router) {}
  
  goBack() {
    this.router.navigate(['/']);
  }
}
