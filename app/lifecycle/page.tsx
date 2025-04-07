"use client";

import React from 'react';
import LifecycleMethods from '../components/lifecycle/LifecycleMethods';

export default function LifecyclePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">React Component Lifecycle Methods</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid gap-6">
          <section className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">1️⃣ Mounting (Birth)</h3>
            <p className="text-gray-600">When: Component is created and inserted into the DOM</p>
            <ul className="list-disc ml-6 mt-2">
              <li>constructor() - First called (sets initial state, binds methods)</li>
              <li>static getDerivedStateFromProps() - Rare (adjusts state based on props)</li>
              <li>render() - Required (creates JSX for display)</li>
              <li>componentDidMount() - After mounting (API calls, DOM setup)</li>
            </ul>
          </section>

          <section className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">2️⃣ Updating (Growth)</h3>
            <p className="text-gray-600">When: Component re-renders due to props/state changes</p>
            <ul className="list-disc ml-6 mt-2">
              <li>static getDerivedStateFromProps() - Same as mounting</li>
              <li>shouldComponentUpdate() - Performance gatekeeper</li>
              <li>render() - Re-creates updated JSX</li>
              <li>getSnapshotBeforeUpdate() - Captures pre-update DOM info</li>
              <li>componentDidUpdate() - Post-update operations</li>
            </ul>
          </section>

          <section className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">3️⃣ Unmounting (Death)</h3>
            <p className="text-gray-600">When: Component is removed from DOM</p>
            <ul className="list-disc ml-6 mt-2">
              <li>componentWillUnmount() - Cleanup crew (event listeners, timers)</li>
            </ul>
          </section>

          <section className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">🚑 Error Handling</h3>
            <p className="text-gray-600">When: Errors occur in child components</p>
            <ul className="list-disc ml-6 mt-2">
              <li>static getDerivedStateFromError() - Updates state after error</li>
              <li>componentDidCatch() - Error logger</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <p className="text-gray-600 mb-4">Open your browser&apos;s console to see lifecycle methods in action!</p>
        <LifecycleMethods />
      </div>
    </div>
  );
}
