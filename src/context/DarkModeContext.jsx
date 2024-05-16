import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

DarkModeProvider.propTypes = {
  children : PropTypes.element,
};

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDark() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Context is used outside of the contextProvider");
  return context;
}

export { DarkModeProvider, useDark };
