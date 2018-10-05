import React from 'react';
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/404'>404</NavLink>
        </nav>
    )
};

export default NavMenu;