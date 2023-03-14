import React from 'react';
import './Switch.css';
import { createContext } from 'react';
export const ThemeContext = createContext("dark");

const Switch = ({theme, setTheme}) => {
    const toogleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={toogleTheme}
        checked={theme === "light"}
      />
      <label
        id={theme}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </ThemeContext.Provider>
  );
};

export default Switch;