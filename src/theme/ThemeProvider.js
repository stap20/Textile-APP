// ThemeProvider.js
import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import lightTheme from './light';
import darkTheme from './dark';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light'); // Default to the light theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Load the appropriate theme based on the current value of 'theme'
  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    // Load the theme from AsyncStorage when the app starts
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('appTheme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    // Save the current theme to AsyncStorage whenever it changes
    AsyncStorage.setItem('appTheme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, themeStyles}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme};
