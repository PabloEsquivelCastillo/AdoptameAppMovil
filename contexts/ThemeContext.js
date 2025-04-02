import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Crear el contexto para el modo oscuro
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const systemTheme = useColorScheme(); // Obtiene el tema del sistema
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  useEffect(() => {
    // Cambia el estado del tema si el sistema cambia de tema
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
