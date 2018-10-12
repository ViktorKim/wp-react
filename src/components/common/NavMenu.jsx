import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = ({links}) => {
    return (
        <nav className="main-menu">
            {
                Object.values(links).map((link) => {
                    const _URL = new URL(link['url']);
                    return (
                        <NavLink key={link['ID']} to={_URL.pathname}>{link['title']}</NavLink>
                    )
                })
            }
        </nav>
    )
};

export default NavMenu;
