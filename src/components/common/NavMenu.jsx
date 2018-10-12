import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = ({links}) => {
    return (
        <nav className="main-menu">
            {
                Object.keys(links).map((key) => {
                    const _URL = new URL(links[key]['url']);
                    return (
                        <NavLink key={links[key]['ID']} to={_URL.pathname}>{links[key]['title']}</NavLink>
                    )
                })
            }
        </nav>
    )
};

export default NavMenu;
