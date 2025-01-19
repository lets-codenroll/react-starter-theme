import React, { createContext, useState } from "react";

// Create the AppContext
export const AppContext = createContext();

// Define the AppProvider component
export const AppProvider = ({ children }) => {
  // Define global state
  const [state, setState] = useState({
    theme: "light", // Example: Theme state (light or dark)
    user: null,     // Example: User state (e.g., user object or null)
  });

  // Define global functions (e.g., toggle theme)
  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  // Provide state and actions to the context
  return (
    <AppContext.Provider value={{ state, setState, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
