import ReactSwitch from "react-switch";
import { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext("dark");

const NavLinks = ({theme, setTheme}) => {
    const toogleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
        <nav className="NavLinks">
        <ul>
            <li>
            <ReactSwitch onChange={toogleTheme} checked={theme === "light"}/>
            </li>
            <li>
                <a href="/my-page" ><p>&gt;</p>Home</a>
            </li>
            <li>
                <a href="/my-page"><p>&gt;</p>Projects</a>
            </li>
        </ul>
        </nav>
        </ThemeContext.Provider>
    );
}
export default NavLinks;