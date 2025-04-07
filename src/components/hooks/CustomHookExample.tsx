import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useDebounce } from './useDebounce';

const CustomHookExample: React.FC = () => {
  const [name, setName] = useLocalStorage('user-name', '');
  const [searchTerm, setSearchTerm] = useLocalStorage('search-term', '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className="example-container">
      <h2>Custom Hooks Example</h2>

      <div className="local-storage-section">
        <h3>useLocalStorage Hook</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>
          Your name ({name}) is saved in localStorage.
          Try refreshing the page!
        </p>
      </div>

      <div className="debounce-section">
        <h3>useDebounce Hook</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search..."
        />
        <p>
          Immediate value: {searchTerm}
          <br />
          Debounced value: {debouncedSearchTerm}
        </p>
      </div>
    </div>
  );
};

export default CustomHookExample;
