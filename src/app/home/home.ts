import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { Housinglocation } from '../housing-location-model';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form class="search-bar">
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location
        *ngFor="let house of housingLocationList"
        [location]="house">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.css'],
  imports: [CommonModule, HousingLocation],
})
export class Home {
  housingLocationList: Housinglocation[] = [
    {
  id: 0,
  name: 'Secunderabad lites',
  city: 'Hyderabad',
  state: 'TL',
  photo: '/house1.png',
  availableUnits: 4,
  wifi: true,
  laundry: true
},
{
  id: 1,
  name: 'Golden clame',
  city: 'Santa Monica',
  state: 'CA',
  photo: '/house2.png',
  availableUnits: 0,
  wifi: false,
  laundry: true
},
{
  id: 2,
  name: 'Austria heights',
  city: 'Juneau',
  state: 'AK',
  photo: '/house3.png',
  availableUnits: 1,
  wifi: false,
  laundry: false
},
{
  id: 3,
  name: 'Homesteady Housing',
  city: 'Chicago',
  state: 'IL',
  photo: '/house4.png',
  availableUnits: 1,
  wifi: true,
  laundry: false
},
{
  id: 4,
  name: 'Summer time ',
  city: 'Gary',
  state: 'IN',
  photo: '/house5.png',
  availableUnits: 1,
  wifi: true,
  laundry: false
},
{
  id: 5,
  name: 'Hawkins house',
  city: 'Oakland',
  state: 'CA',
  photo: '/house6.png',
  availableUnits: 2,
  wifi: true,
  laundry: true
},
{
  id: 6,
  name: 'Mystic falls',
  city: 'Oakland',
  state: 'CA',
  photo: '/house7.png',
  availableUnits: 5,
  wifi: true,
  laundry: true
},
{
  id: 7,
  name: 'hopeless heights',
  city: 'Oakland',
  state: 'CA',
  photo: '/house8.png',
  availableUnits: 2,
  wifi: true,
  laundry: true
},
{
  id: 8,
  name: 'kalyani trident',
  city: 'Oakland',
  state: 'CA',
  photo: '/house9.png',
  availableUnits: 10,
  wifi: false,
  laundry: false
},
{
  id: 9,
  name: 'city light',
  city: 'Portland',
  state: 'OR',
  photo: '/house10.png',
  availableUnits: 6,
  wifi: true,
  laundry: true
}
  ];
}