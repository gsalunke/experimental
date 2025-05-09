"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

const ArrayMethodsExample = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from JSONPlaceholder API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Example 1: map() - Transform array data
  const demonstrateMap = () => {
    const userNames = users.map(user => ({
      id: user.id,
      name: user.name,
      city: user.address.city
    }));

    setResult(`// Function being executed:
const demonstrateMap = () => {
  const userNames = users.map(user => ({
    id: user.id,
    name: user.name,
    city: user.address.city
  }));
  return userNames;
}

// Result:
${JSON.stringify(userNames, null, 2)}`);
  };

  // Example 2: filter() - Filter array based on condition
  const demonstrateFilter = () => {
    const citiesStartingWithS = users.filter(user => 
      user.address.city.toLowerCase().startsWith('s')
    );

    setResult(`// Function being executed:
const demonstrateFilter = () => {
  const citiesStartingWithS = users.filter(user => 
    user.address.city.toLowerCase().startsWith('s')
  );
  return citiesStartingWithS;
}

// Result:
${JSON.stringify(citiesStartingWithS, null, 2)}`);
  };

  // Example 3: find() - Find first matching element
  const demonstrateFind = () => {
    const userWithEmail = users.find(user => 
      user.email.includes('.biz')
    );

    setResult(`// Function being executed:
const demonstrateFind = () => {
  const userWithEmail = users.find(user => 
    user.email.includes('.biz')
  );
  return userWithEmail;
}

// Result:
${JSON.stringify(userWithEmail, null, 2)}`);
  };

  // Example 4: Chaining methods
  const demonstrateChaining = () => {
    const result = users
      .filter(user => user.address.city.toLowerCase().includes('s'))
      .map(user => ({
        name: user.name,
        city: user.address.city,
        email: user.email
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    setResult(`// Function being executed:
const demonstrateChaining = () => {
  const result = users
    .filter(user => user.address.city.toLowerCase().includes('s'))
    .map(user => ({
      name: user.name,
      city: user.address.city,
      email: user.email
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

// Result:
${JSON.stringify(result, null, 2)}`);
  };

  // Example 5: reduce() - Aggregate array data
  const demonstrateReduce = () => {
    const cityCount = users.reduce((acc, user) => {
      const city = user.address.city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    setResult(`// Function being executed:
const demonstrateReduce = () => {
  const cityCount = users.reduce((acc, user) => {
    const city = user.address.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return cityCount;
}

// Result:
${JSON.stringify(cityCount, null, 2)}`);
  };

  // Example 6: some() and every()
  const demonstrateSomeEvery = () => {
    const hasSouthCity = users.some(user => 
      user.address.city.toLowerCase().includes('south')
    );

    const allHaveEmail = users.every(user => 
      user.email.includes('@')
    );

    setResult(`// Function being executed:
const demonstrateSomeEvery = () => {
  // some(): checks if at least one element matches the condition
  const hasSouthCity = users.some(user => 
    user.address.city.toLowerCase().includes('south')
  );

  // every(): checks if all elements match the condition
  const allHaveEmail = users.every(user => 
    user.email.includes('@')
  );

  return { hasSouthCity, allHaveEmail };
}

// Result:
${JSON.stringify({ hasSouthCity, allHaveEmail }, null, 2)}`);
  };

  // Example 7: findIndex() and includes()
  const demonstrateFindIndexIncludes = () => {
    const userIndex = users.findIndex(user => 
      user.username.toLowerCase().includes('bret')
    );

    const usernames = users.map(user => user.username);
    const includesKarma = usernames.includes('Karianne');

    setResult(`// Function being executed:
const demonstrateFindIndexIncludes = () => {
  // findIndex(): returns the index of the first matching element
  const userIndex = users.findIndex(user => 
    user.username.toLowerCase().includes('bret')
  );

  // includes(): checks if an array includes a certain value
  const usernames = users.map(user => user.username);
  const includesKarma = usernames.includes('Karianne');

  return { 
    userIndex,
    includesKarma,
    userAtIndex: userIndex !== -1 ? users[userIndex].username : null
  };
}

// Result:
${JSON.stringify({
  userIndex,
  includesKarma,
  userAtIndex: userIndex !== -1 ? users[userIndex].username : null
}, null, 2)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">JavaScript Array Methods</h1>
      
      <div className="grid gap-6">
        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">What are Arrays?</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-4">
              Arrays in JavaScript are ordered collections that can hold any type of data, including numbers, 
              strings, objects, and even other arrays. They are zero-indexed and come with powerful built-in 
              methods for data manipulation.
            </p>
            <pre className="text-sm bg-gray-100 p-2 rounded">
{`// Array creation
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", { three: 3 }, [4, 5]];

// Array access
console.log(numbers[0]);  // 1
console.log(mixed[1]);    // "two"

// Array length
console.log(numbers.length);  // 5`}
            </pre>
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Interactive Examples with Real Data</h2>
          <div className="grid gap-4">
            {loading ? (
              <div className="text-blue-500">Loading users data...</div>
            ) : error ? (
              <div className="text-red-500">Error: {error}</div>
            ) : (
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={demonstrateMap}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  map() Example
                </button>
                
                <button
                  onClick={demonstrateFilter}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  filter() Example
                </button>

                <button
                  onClick={demonstrateFind}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  find() Example
                </button>

                <button
                  onClick={demonstrateChaining}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Method Chaining
                </button>

                <button
                  onClick={demonstrateReduce}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  reduce() Example
                </button>

                <button
                  onClick={demonstrateSomeEvery}
                  className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                >
                  some() & every()
                </button>

                <button
                  onClick={demonstrateFindIndexIncludes}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                  findIndex() & includes()
                </button>
              </div>
            )}

            {result && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap overflow-auto max-h-[600px] text-sm font-mono">
                  {result}
                </pre>
              </div>
            )}
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Common Array Methods</h2>
          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">map()</h3>
              <p className="mb-2">Creates a new array by transforming each element</p>
              <pre className="text-sm bg-gray-100 p-2 rounded">
{`const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
// Result: [2, 4, 6]`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">filter()</h3>
              <p className="mb-2">Creates a new array with elements that pass a test</p>
              <pre className="text-sm bg-gray-100 p-2 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(x => x % 2 === 0);
// Result: [2, 4]`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">find()</h3>
              <p className="mb-2">Returns the first element that passes a test</p>
              <pre className="text-sm bg-gray-100 p-2 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(x => x % 2 === 0);
// Result: 2`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">some() & every()</h3>
              <p className="mb-2">Test array elements against a condition</p>
              <pre className="text-sm bg-gray-100 p-2 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(x => x % 2 === 0);  // true
const allEven = numbers.every(x => x % 2 === 0); // false`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">findIndex() & includes()</h3>
              <p className="mb-2">Search for elements in an array</p>
              <pre className="text-sm bg-gray-100 p-2 rounded">
{`const fruits = ['apple', 'banana', 'orange'];
const bananaIndex = fruits.findIndex(f => f === 'banana'); // 1
const hasApple = fruits.includes('apple'); // true`}
              </pre>
            </div>
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use const for array declaration unless it needs to be reassigned</li>
            <li>Prefer array methods over loops for better readability</li>
            <li>Use method chaining for complex operations</li>
            <li>Consider performance with large arrays</li>
            <li>Use TypeScript for better type safety with arrays</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ArrayMethodsExample;
