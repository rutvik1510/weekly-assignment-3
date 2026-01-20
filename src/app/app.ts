import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  template: `
    <main>
      <header class="brandn">
        <img class="brandlogo" src="/home.png" alt="Logoss">
        <span class= "text">Homes</span>
      </header>
      <section class="content">
        <app-home></app-home>

      </section>
    </main>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('test');
}