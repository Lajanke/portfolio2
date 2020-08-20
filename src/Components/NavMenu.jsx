import React, {useState} from 'react';
import {RiMenuFoldFill, RiMenuUnfoldFill} from 'react-icons/ri';

const NavMenu = () => {
    const [menuOpen, setMenu] = useState(false);
    console.log(menuOpen)

    return (
        <>
        {!menuOpen &&
            <RiMenuFoldFill size={40} onClick={() => setMenu(!menuOpen)}/>
        }
        {menuOpen &&
            <RiMenuUnfoldFill size={40} onClick={() => setMenu(!menuOpen)}/>
        }    
        </>
    )
}

export default NavMenu;