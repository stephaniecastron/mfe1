import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.scss'
})
export class SimulationComponent {

  constructor(private router: Router) {

  }

  navigateTo() {
    this.router.navigate(['/resume'], { queryParams: { productId: 'EP' } })
  }

}
