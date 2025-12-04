import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { STORAGE_KEYS } from "../utils/constants";

// Create Theme Context
const ThemeContext = createContext(null);

// Custom hook to use Theme Context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children, theme }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem(STORAGE_KEYS.THEME);
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = {
    mode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
