import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define theme colors
const lightTheme = {
  background: '#e6f1ff',
  text: '#0a192f',
  headings: '#020c1b',
  links: '#0a192f',
  lineColor: 'rgba(10, 25, 47, 0.3)',
  cardBackground: '#d4e4ff',
  navBackground: 'rgba(230, 241, 255, 0.85)',
  navShadow: '0 10px 30px -10px rgba(10, 25, 47, 0.3)',
  mode: 'light'
};

const darkTheme = {
  background: '#0a192f',
  text: '#8892b0',
  headings: '#ccd6f6',
  links: '#8892b0',
  lineColor: '#233554',
  cardBackground: '#112240',
  navBackground: 'rgba(10, 25, 47, 0.85)',
  navShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
  mode: 'dark'
};

// Create context for theme toggling
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

// Custom hook for theme
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference or default to dark
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme and save to localStorage
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Set theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check for preferred color scheme
      const prefersDark = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Get theme object based on current theme mode
  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
