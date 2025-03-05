import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Home Page</h1>
    <nav>
      <a routerLink="/blog">Blog</a>
      <a routerLink="/counter">Counter</a>
    </nav>
  `,
})
export class HomeComponent {}
