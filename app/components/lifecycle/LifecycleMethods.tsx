"use client";

import React, { useState, useEffect, useCallback } from 'react';

export default function LifecycleMethods() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('1️⃣ Component mounted (useEffect with empty deps - componentDidMount equivalent)');
    
    // Setup interval (will be cleaned up in unmounting)
    const timerID = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Fetch data
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(JSON.stringify(data)));

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('3️⃣ Component will unmount (useEffect cleanup - componentWillUnmount equivalent)');
      clearInterval(timerID);
    };
  }, []); // Empty dependency array = run once on mount

  // Equivalent to componentDidUpdate for count changes
  useEffect(() => {
    if (count > 0) { // Skip initial render
      console.log('2️⃣ Count updated (useEffect with count dependency - componentDidUpdate equivalent):', count);
    }
  }, [count]); // Only run when count changes

  // Error handling with try-catch
  const handleError = useCallback(() => {
    try {
      throw new Error('Test Error');
    } catch (err) {
      console.log('🚑 Error caught in error boundary');
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  }, []);

  if (error) {
    return (
      <div className="p-4 border border-red-500 rounded bg-red-50">
        <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong!</h2>
        <pre className="text-red-600">{error.message}</pre>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => setError(null)}
        >
          Reset Error
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">React Hooks Lifecycle Demo</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1️⃣ Mount & 2️⃣ Update Phase</h2>
        <p className="mb-2">Counter (updates every second): {count}</p>
        <p className="mb-2">API Data: {data || 'Loading...'}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">State Updates</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
          onClick={() => setCount(prev => prev + 10)}
        >
          Increment by 10
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Error Handling</h2>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleError}
        >
          Trigger Error
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <ul className="list-disc pl-5">
          <li>Open the browser console to see lifecycle method equivalents</li>
          <li>The counter updates every second (useEffect with empty deps)</li>
          <li>Click Increment by 10 to trigger update effect</li>
          <li>Click Trigger Error to see error handling</li>
          <li>Navigate away to see cleanup effect</li>
        </ul>
      </div>
    </div>
  );
}
