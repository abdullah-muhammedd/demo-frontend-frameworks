import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Blog Posts</h1>

      <p *ngIf="loading" class="text-gray-500">Loading...</p>

      <ul *ngIf="!loading" class="grid grid-cols-2 gap-5">
        <li *ngFor="let post of posts" class="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
          <a [routerLink]="['/blog', post.id]" class="text-2xl font-semibold text-blue-800 hover:underline">
            {{ post.title }}
          </a>
          <p class="mt-2 text-gray-700">{{ post.body.substring(0, 100) }}...</p>
        </li>
      </ul>
    </div>
  `,
})

export class BlogComponent implements OnInit {
  private http = inject(HttpClient);
  posts: Post[] = [];
  loading = true;

  ngOnInit() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch posts:', err);
        this.loading = false;
      },
    });
  }
}
