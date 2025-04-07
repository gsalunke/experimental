"use client";

import React, { useState } from 'react';

const UseStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="example-container">
      <h2>useState Example</h2>
      
      <div className="counter-section">
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
};

export default UseStateExample;
