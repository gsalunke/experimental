"use client";

import React, { useState } from 'react';
import axios from 'axios';

interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

const AxiosExample = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Example 1: GET Request
  const fetchPosts = () => {
    setLoading(true);
    setError(null);

    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setResult(JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 2: POST Request
  const createPost = () => {
    setLoading(true);
    setError(null);

    const newPost: Post = {
      title: 'New Post Title',
      body: 'This is the content of the new post',
      userId: 1
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        setResult(JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 3: PUT Request
  const updatePost = () => {
    setLoading(true);
    setError(null);

    const updatedPost: Post = {
      id: 1,
      title: 'Updated Post Title',
      body: 'This is the updated content of the post',
      userId: 1
    };

    axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost)
      .then(response => {
        setResult(JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 4: DELETE Request
  const deletePost = () => {
    setLoading(true);
    setError(null);

    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setResult('Post deleted successfully!\n' + JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 5: Multiple Requests
  const multipleRequests = () => {
    setLoading(true);
    setError(null);

    Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts/1'),
      axios.get('https://jsonplaceholder.typicode.com/posts/2'),
      axios.get('https://jsonplaceholder.typicode.com/posts/3')
    ])
      .then(responses => {
        const results = responses.map(response => response.data);
        setResult(JSON.stringify(results, null, 2));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Example 6: Async/Await with Error Handling
  const asyncExample = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${response.data.id}/comments`);
      
      const result = {
        post: response.data,
        comments: commentsResponse.data
      };

      setResult(JSON.stringify(result, null, 2));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Axios Examples with Promise Handling</h1>
      
      <div className="grid gap-6">
        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">REST API Examples</h2>
          <p className="text-gray-600 mb-4">
            Using JSONPlaceholder API to demonstrate different HTTP methods with Axios
          </p>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={fetchPosts}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                GET Request
              </button>
              
              <button
                onClick={createPost}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                POST Request
              </button>

              <button
                onClick={updatePost}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                PUT Request
              </button>

              <button
                onClick={deletePost}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                DELETE Request
              </button>

              <button
                onClick={multipleRequests}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Multiple Requests
              </button>

              <button
                onClick={asyncExample}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              >
                Async/Await Example
              </button>
            </div>

            {loading && (
              <div className="text-blue-500">Loading...</div>
            )}

            {error && (
              <div className="text-red-500 bg-red-50 p-4 rounded">
                Error: {error}
              </div>
            )}

            {result && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap overflow-auto max-h-[400px]">
                  {result}
                </pre>
              </div>
            )}
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Vanilla JavaScript Examples (Try in Console)</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-2">Using Fetch API</h3>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm">
{`// Basic GET Request
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('GET Result:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST Request
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is a new post',
        userId: 1
      })
    });
    const data = await response.json();
    console.log('POST Result:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// PUT Request
async function updatePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Updated Post',
        body: 'This post has been updated',
        userId: 1
      })
    });
    const data = await response.json();
    console.log('PUT Result:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// DELETE Request
async function deletePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    });
    console.log('DELETE Status:', response.status);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Multiple Requests with Promise.all
async function multipleRequests() {
  try {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://jsonplaceholder.typicode.com/posts/3'
    ];
    
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const results = await Promise.all(promises);
    console.log('Multiple Requests Results:', results);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Error Handling with Async/Await
async function handleErrors() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error caught:', error.message);
  }
}

// Using XMLHttpRequest (Old School)
function oldSchoolRequest() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(\`Request failed with status \${xhr.status}\`));
      }
    };
    xhr.onerror = () => reject(new Error('Request failed'));
    xhr.send();
  });
}

// Copy any of these functions and run them in your browser's console!
// Example usage:
// fetchData()
// createPost()
// updatePost()
// deletePost()
// multipleRequests()
// handleErrors()
// oldSchoolRequest().then(console.log).catch(console.error)`}
              </pre>
            </div>
          </div>
        </section>

        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Code Examples</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-2">GET Request</h3>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm">
{`axios.get('https://api.example.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">POST Request</h3>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm">
{`axios.post('https://api.example.com/posts', {
  title: 'New Post',
  body: 'Content'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Async/Await with Error Handling</h3>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm">
{`async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/posts/1');
    const comments = await axios.get(\`/posts/\${response.data.id}/comments\`);
    return { post: response.data, comments: comments.data };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AxiosExample;
