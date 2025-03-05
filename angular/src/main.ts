import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';
import { BlogComponent } from './app/blog/blog.component';
import { CounterComponent } from './app/counter/counter.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'counter', component: CounterComponent },
    ]),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
