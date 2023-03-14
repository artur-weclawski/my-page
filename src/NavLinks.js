import Switch from "./Switch";
import './Switch.css';
import './NavBar.css';
const NavLinks = ({theme, setTheme}) => {
    
    return(
        <nav className="NavLinks">
        <ul>
            <li>
                <a href="/my-page" ><p>&gt;</p>Home</a>
            </li>
            <li>
                <a href="/my-page"><p>&gt;</p>Projects</a>
            </li>
            <li className="li-Switch">
                <div className="Switch"><Switch theme={theme} setTheme={setTheme}/></div>
            </li>
        </ul>
        </nav>
    );
}
export default NavLinks;