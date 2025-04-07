"use client";

import React, { Component } from 'react';

interface Props {}

interface State {
  count: number;
  data: string | null;
  error: Error | null;
}

class LifecycleMethods extends Component<Props, State> {
  private timerID: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      error: null
    };
    console.log('1️⃣ Constructor called');
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log('1️⃣/2️⃣ getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('1️⃣ componentDidMount called');
    // Example of setting up timer (will be cleaned in unmounting)
    this.timerID = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);

    // Example of API call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ data: JSON.stringify(data) }));
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('2️⃣ shouldComponentUpdate called');
    return true; // Allow update
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('2️⃣ getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log('2️⃣ componentDidUpdate called');
    // Example of conditional update
    if (prevState.count !== this.state.count) {
      console.log('Count updated to:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('3️⃣ componentWillUnmount called');
    // Cleanup
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  static getDerivedStateFromError(error: Error) {
    console.log('🚑 getDerivedStateFromError called');
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('🚑 componentDidCatch called');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    console.log('1️⃣/2️⃣ render called');

    if (this.state.error) {
      return <div>Something went wrong!</div>;
    }

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">React Component Lifecycle Demo</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1️⃣ Mounting Phase</h2>
          <p className="mb-2">Counter (updates every second): {this.state.count}</p>
          <p className="mb-2">API Data: {this.state.data || 'Loading...'}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2️⃣ Updating Phase</h2>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => this.setState({ count: this.state.count + 10 })}
          >
            Increment by 10
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3️⃣ Error Handling</h2>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => {
              throw new Error('Test Error');
            }}
          >
            Trigger Error
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc pl-5">
            <li>Open the browser console to see lifecycle method calls</li>
            <li>The counter updates every second (componentDidMount sets this up)</li>
            <li>Click "Increment by 10" to trigger update lifecycle methods</li>
            <li>Click "Trigger Error" to see error handling methods</li>
            <li>Navigate away to see unmounting lifecycle method</li>
          </ul>
        </div>
      </div>
    );
  }
}
