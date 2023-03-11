import NavLinks from "./NavLinks";
import { useState } from "react";
const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className="MobileNavigation">
            <div  className='MobileNavigation-icon' onClick={() => setOpen(!open)}>
                <i className="gg-menu"></i>
            </div>
        {open && <NavLinks />}
        </div>
    );
}

export default MobileNavigation;