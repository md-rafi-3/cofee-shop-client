import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex gap-5 text-lg font-blod'>
             <NavLink to="/">Home</NavLink>
            <NavLink to="/signin">SignIn</NavLink>
            
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default Header;