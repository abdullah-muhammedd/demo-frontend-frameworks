import React, { useEffect, useState } from "react";

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-64">
      <p className="text-lg font-semibold text-gray-800">Count: <span className="text-blue-600">{count}</span></p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
}
