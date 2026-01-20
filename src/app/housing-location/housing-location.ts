import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housing-location-model';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  template: `
    <article class="listing-card">
      <img
        class="listing-photo"
        [src]="location.photo"
        alt="Exterior photo of {{ location.name }}"
      />

      <div class="listing-content">
        <h2 class="listing-heading">
          {{ location.name }}
        </h2>

        <p class="listing-location">
          📍 {{ location.city }}, {{ location.state }}
        </p>

        <a class="learn-more">Learn More ›</a>
      </div>
    </article>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  @Input() location!: Housinglocation;
}