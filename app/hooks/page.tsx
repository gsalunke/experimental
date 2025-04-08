"use client";

import React, { useState, useEffect } from 'react';
import UseEffectExample from '../components/hooks/UseEffectExample';
import CustomHookExample from '../components/hooks/CustomHookExample';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

export default function HooksPage() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">React Hooks Examples</h1>
        
        <div className="space-y-12">
          {/* useState Example */}
          <section className="border rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">useState Hook</h2>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r">
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Interactive Example</h3>
                  <Counter />
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-2">Code</h3>
                <div className="overflow-auto max-h-[300px]">
                  <pre className="text-sm">
{`function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>
      
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* useEffect Example */}
          <section className="border rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">useEffect Hook</h2>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r">
                <UseEffectExample />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-2">Code</h3>
                <div className="overflow-auto max-h-[300px]">
                  <pre className="text-sm">
{`function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect that runs on mount
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component will unmount');
  }, []);

  // Effect that runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
    document.title = \`Count: \${count}\`;
  }, [count]);

  // Effect with cleanup (simulating API call)
  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        if (mounted) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          console.error('Error:', error);
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* useContext Example */}
          <section className="border rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">useContext Hook</h2>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r">
                <ThemeExample />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-2">Code</h3>
                <div className="overflow-auto max-h-[300px]">
                  <pre className="text-sm">
{`// ThemeContext.tsx
import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// ThemeExample Component
function ThemeExample() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>
      <div className="p-4 rounded-lg border">
        <h3 className="font-semibold mb-4">Current Theme: {theme}</h3>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Theme
        </button>
        <div className="mt-4">
          <p>This component uses the theme context</p>
          <p>Try toggling the theme!</p>
        </div>
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Hook Example */}
          <section className="border rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">Custom Hook: useDebounce</h2>
            <div className="grid grid-cols-2">
              <div className="p-4 border-r">
                <CustomHookExample />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-2">Code</h3>
                <div className="overflow-auto max-h-[300px]">
                  <pre className="text-sm">
{`// useDebounce.ts
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// CustomHookExample.tsx
function CustomHookExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Simulate API call
      const searchResults = [
        \`Result 1 for "\${debouncedSearchTerm}"\`,
        \`Result 2 for "\${debouncedSearchTerm}"\`,
        \`Result 3 for "\${debouncedSearchTerm}"\`
      ];
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded"
        />
      </div>
      
      <div>
        <h4>Search Results:</h4>
        {results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

// Counter Component for useState Example
function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>
      
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}

// Theme Example Component
function ThemeExample() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>
      <div className="p-4 rounded-lg border">
        <h3 className="font-semibold mb-4">Current Theme: {theme}</h3>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Theme
        </button>
        <div className="mt-4">
          <p>This component uses the theme context</p>
          <p>Try toggling the theme!</p>
        </div>
      </div>
    </div>
  );
}
