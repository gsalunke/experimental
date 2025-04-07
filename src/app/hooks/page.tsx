import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import UseStateExample from '@/components/hooks/UseStateExample';
import UseEffectExample from '@/components/hooks/UseEffectExample';
import UseContextExample from '@/components/hooks/UseContextExample';
import CustomHookExample from '@/components/hooks/CustomHookExample';

const HooksPage = () => {
  return (
    <ThemeProvider>
      <div className="hooks-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>React Hooks Examples</h1>
        
        <div style={{ marginBottom: '40px' }}>
          <UseStateExample />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <UseEffectExample />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <UseContextExample />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <CustomHookExample />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HooksPage;
