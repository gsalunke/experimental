"use client";

import React, { useState, useEffect } from 'react';

const UseEffectExample: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string | null>(null);

  // Effect 1: Window resize listener
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array = run once on mount

  // Effect 2: Counter title updater
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]); // Run when count changes

  // Effect 3: Data fetching example
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/gsalunke');
        const json = await response.json();
        setData(json.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array = run once on mount

  return (
    <div className="example-container">
      <h2>useEffect Example</h2>
      
      <div className="window-width-section">
        <p>Window width: {windowWidth}px</p>
        <p>Try resizing your window!</p>
      </div>

      <div className="counter-section">
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>
          Increment (Check the page title!)
        </button>
      </div>

      <div className="data-section">
        <p>GitHub User Data: {data || 'Loading...'}</p>
      </div>
    </div>
  );
};

export default UseEffectExample;
