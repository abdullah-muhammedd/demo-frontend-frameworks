<script>
    import { writable } from 'svelte/store';
  
    let count = writable(0);
  
    const increment = () => {
      count.update(prev => prev + 1);
    };
  </script>
  
  <div>
    <p>Count: {$count}</p>
    <button on:click={increment}>Increment</button>
  </div>
  