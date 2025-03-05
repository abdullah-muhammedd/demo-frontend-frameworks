// components/InteractiveComponent.js
'use client';

import { useState } from 'react';

function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default InteractiveComponent;
