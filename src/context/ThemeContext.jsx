import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

/* DARK MODE ADDED */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  /* DARK MODE ADDED */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* DARK MODE ADDED */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* DARK MODE ADDED */
export const useTheme = () => useContext(ThemeContext);
