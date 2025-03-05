import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-3xl font-bold mb-4">Counter: {{ count() }}</h1>
      <button (click)="increment()" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Increase
      </button>
    </div>
  `,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }
}
