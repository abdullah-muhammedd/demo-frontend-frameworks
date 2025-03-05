import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importing RouterOutlet for routing
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 't-project';
}
