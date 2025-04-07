import React from 'react';
import { useTheme } from '@/src/context/ThemeContext';

const UseContextExample: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    button: {
      backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
      color: theme === 'light' ? '#ffffff' : '#333333',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container} className="example-container">
      <h2>useContext Example</h2>
      <p>Current theme: {theme}</p>
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default UseContextExample;
