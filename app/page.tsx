"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to React Examples</h1>
      
      <div className="grid gap-4 max-w-4xl">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            This project demonstrates various React concepts and patterns. Use the sidebar navigation to explore different examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>React Hooks</strong> - Examples of useState, useEffect, useContext, and custom hooks
            </li>
            <li>
              <strong>Lifecycle Methods</strong> - Understanding component lifecycle using modern React patterns
            </li>
          </ul>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link 
              href="/hooks" 
              className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">React Hooks →</h3>
              <p className="text-gray-600">Explore hook examples and patterns</p>
            </Link>
            
            <Link 
              href="/lifecycle" 
              className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Lifecycle Methods →</h3>
              <p className="text-gray-600">Learn about component lifecycle</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
