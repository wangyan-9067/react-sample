import React from 'react';
import { NavLink } from 'react-router-dom';

let Link = ({ filter, children }) => {
    return (
        <NavLink
            to = {`/${ filter }`}
            activeStyle={
                {
                    textDecoration: 'none',
                    color: 'black'
                }
            }
        >
            {children}
        </NavLink>
    );
};

export default Link;
