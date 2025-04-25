import React from 'react';
import { Button, ThemeProvider } from '@gsalunke/private-ui-components';

/**
 * Custom theme configuration for the orange color scheme
 * The @gsalunke/private-ui-components library provides a simple way to theme
 * your components using the brand palette configuration.
 * 
 * Just define your brand colors in the theme.palette.brand object:
 * - primary: Main brand color
 * - secondary: Secondary brand color
 * - accent: Accent color for special elements
 */
const orangeTheme = {
  palette: {
    brand: {
      primary: '#FF6B00',    // Dark orange - Used for primary actions and emphasis
      secondary: '#FFB27F',  // Light orange - Used for secondary actions
      accent: '#FFE0CC',     // Orange grey - Used for special highlights
    },
  },
  brandComponents: {
    borderRadius: 8,  // Controls the roundness of components
    spacing: 8,      // Base unit for component spacing
  },
};

/**
 * @component ButtonSample
 * @description A sample component showcasing the Button component from @gsalunke/private-ui-components
 * 
 * @example Installation
 * ```bash
 * yarn add @gsalunke/private-ui-components
 * 
 * # Install peer dependencies
 * yarn add @emotion/react@^11.11.0 @emotion/styled@^11.11.0 @mui/material@^5.13.0 @mui/icons-material@^5.13.0
 * ```
 * 
 * @example Basic Usage with Theme
 * ```tsx
 * import { Button, ThemeProvider } from '@gsalunke/private-ui-components';
 * 
 * // 1. Define your brand colors
 * const theme = {
 *   palette: {
 *     brand: {
 *       primary: '#YOUR_PRIMARY_COLOR',
 *       secondary: '#YOUR_SECONDARY_COLOR',
 *       accent: '#YOUR_ACCENT_COLOR',
 *     }
 *   }
 * };
 * 
 * // 2. Wrap your app with ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Button primary contained>Primary Button</Button>
 * </ThemeProvider>
 * ```
 * 
 * @props Button Component Props
 * - primary?: boolean - Use primary brand color
 * - secondary?: boolean - Use secondary brand color
 * - accent?: boolean - Use accent brand color
 * - contained?: boolean - Use contained variant (solid background)
 * - outlined?: boolean - Use outlined variant (transparent with border)
 * - If neither contained nor outlined is specified, text variant is used
 * 
 * @theme Brand Theme Configuration
 * The library simplifies MUI theming by focusing on brand colors:
 * ```typescript
 * {
 *   palette: {
 *     brand: {
 *       primary: string,   // Your main brand color
 *       secondary: string, // Your secondary brand color
 *       accent: string,    // Your accent brand color
 *     },
 *   },
 *   brandComponents: {
 *     borderRadius: number, // Controls component roundness
 *     spacing: number,      // Base spacing unit
 *   },
 * }
 * ```
 * 
 * @styling Button Variants
 * The library automatically handles:
 * 1. Contained Buttons
 *    - Uses solid brand colors
 *    - White text for contrast
 *    - Darkens on hover
 * 
 * 2. Outlined Buttons
 *    - Transparent background
 *    - Brand colored borders and text
 *    - Light brand color background on hover
 * 
 * 3. Text Buttons
 *    - No background
 *    - Brand colored text
 *    - Light brand color background on hover
 */
export const ButtonSample: React.FC = () => {
  return (
    <ThemeProvider theme={orangeTheme}>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-xl font-bold mb-4">Button Samples with Orange Brand Theme</h2>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Contained Buttons</h3>
            <div className="flex gap-2">
              <Button primary contained>Primary</Button>
              <Button secondary contained>Secondary</Button>
              <Button accent contained>Accent</Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Outlined Buttons</h3>
            <div className="flex gap-2">
              <Button primary outlined>Primary</Button>
              <Button secondary outlined>Secondary</Button>
              <Button accent outlined>Accent</Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Text Buttons</h3>
            <div className="flex gap-2">
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>
              <Button accent>Accent</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Theme Configuration</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our library simplifies theming by focusing on brand colors. Just define your primary, 
            secondary, and accent colors, and we'll handle all the variants and states.
          </p>
          <pre className="bg-white p-4 rounded-md overflow-x-auto">
            {JSON.stringify(orangeTheme, null, 2)}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
};

ButtonSample.displayName = 'ButtonSample';
