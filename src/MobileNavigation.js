import NavLinks from "./NavLinks";
import './MobileNavigation.css';
import { useState } from "react";
const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className="MobileNavigation">
            <div  className='MobileNavigation-icon'>
                <i className="gg-menu" onClick={() => setOpen(!open)}></i>
            </div>
        {open && <NavLinks />}
        </div>
    );
}

export default MobileNavigation;