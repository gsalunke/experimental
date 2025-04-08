"use client";

import React, { useState, useEffect } from 'react';

const PromiseExample = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Example 1: Basic Promise
  const simulateAsyncOperation = (shouldSucceed: boolean = true): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Operation completed successfully!");
        } else {
          reject(new Error("Operation failed!"));
        }
      }, 2000);
    });
  };

  // Example 2: Promise Chaining
  const fetchUserData = () => {
    setLoading(true);
    setError(null);

    // Simulating API calls with Promises
    simulateAsyncOperation()
      .then(result => {
        // First Promise resolved, chain another
        setResult("Step 1: " + result);
        return simulateAsyncOperation(); // Return another promise
      })
      .then(result => {
        // Second Promise resolved
        setResult(prev => prev + "\nStep 2: " + result);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 3: Promise.all
  const fetchMultipleData = () => {
    setLoading(true);
    setError(null);

    const promise1 = simulateAsyncOperation();
    const promise2 = simulateAsyncOperation();
    const promise3 = simulateAsyncOperation();

    Promise.all([promise1, promise2, promise3])
      .then(results => {
        setResult(results.join('\n'));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 4: Async/Await
  const handleAsyncAwait = async () => {
    try {
      setLoading(true);
      setError(null);

      const result1 = await simulateAsyncOperation();
      setResult("First await: " + result1);

      const result2 = await simulateAsyncOperation();
      setResult(prev => prev + "\nSecond await: " + result2);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Example 5: Promise.race
  const racePromises = () => {
    setLoading(true);
    setError(null);

    const fast = new Promise(resolve => setTimeout(() => resolve("Fast operation (1s)"), 1000));
    const slow = new Promise(resolve => setTimeout(() => resolve("Slow operation (3s)"), 3000));

    Promise.race([fast, slow])
      .then(result => {
        setResult(`Winner: ${result}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Initialize examples on mount
  useEffect(() => {
    // This ensures we're only running client-side code
    setResult('Click any button to see Promise examples in action!');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">JavaScript Promises</h1>
      
      <div className="grid gap-6">
        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">What are Promises?</h2>
          <p className="text-gray-600 mb-4">
            Promises are objects representing the eventual completion (or failure) of an asynchronous operation.
            They provide a cleaner way to handle asynchronous operations compared to callbacks.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm">
              {`const promise = new Promise((resolve, reject) => {
  // Async operation here
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});`}
            </pre>
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Real-World Example: XMLHttpRequest with Promises</h2>
          <p className="text-gray-600 mb-4">
            {`Here's`} a practical example of wrapping an XMLHttpRequest in a Promise to make API calls:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm whitespace-pre-wrap">
{`function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

fetchData('https://api.example.com/data')
  .then(data => {
    console.log('Data received:', data);
    return processData(data); // Can return another promise
  })
  .then(processedData => {
    console.log('Processed data:', processedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
            </pre>
          </div>
          <div className="mt-4 text-gray-600">
            <p className="mb-2"><strong>Key Points:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The XMLHttpRequest is wrapped in a Promise for better control flow</li>
              <li>Promise chaining allows sequential processing of data</li>
              <li>Error handling is centralized in the catch block</li>
              <li>Each .then() can return a new promise for further processing</li>
            </ul>
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
          <div className="grid gap-4">
            <div>
              <button
                onClick={() => simulateAsyncOperation(false).catch(e => setError(e.message))}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
              >
                Basic Promise (with error)
              </button>
              
              <button
                onClick={fetchUserData}
                className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600"
              >
                Promise Chaining
              </button>

              <button
                onClick={fetchMultipleData}
                className="bg-purple-500 text-white px-4 py-2 rounded mr-4 hover:bg-purple-600"
              >
                Promise.all
              </button>

              <button
                onClick={handleAsyncAwait}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-4 hover:bg-yellow-600"
              >
                Async/Await
              </button>

              <button
                onClick={racePromises}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Promise.race
              </button>
            </div>

            {loading && (
              <div className="text-blue-500">Loading...</div>
            )}

            {error && (
              <div className="text-red-500">Error: {error}</div>
            )}

            {result && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap">{result}</pre>
              </div>
            )}
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Common Use Cases</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>API Calls:</strong> Fetching data from servers</li>
            <li><strong>File Operations:</strong> Reading/writing files asynchronously</li>
            <li><strong>Database Operations:</strong> Querying databases</li>
            <li><strong>Image Loading:</strong> Loading images dynamically</li>
            <li><strong>Authentication:</strong> User login/signup processes</li>
          </ul>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Promise Methods</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold">Promise.all()</h3>
              <p className="text-gray-600">Waits for all promises to resolve or any to reject</p>
            </div>
            <div>
              <h3 className="font-semibold">Promise.race()</h3>
              <p className="text-gray-600">Settles when the first promise settles</p>
            </div>
            <div>
              <h3 className="font-semibold">Promise.allSettled()</h3>
              <p className="text-gray-600">Waits for all promises to settle, regardless of result</p>
            </div>
            <div>
              <h3 className="font-semibold">Promise.any()</h3>
              <p className="text-gray-600">Fulfills when the first promise fulfills</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PromiseExample;
