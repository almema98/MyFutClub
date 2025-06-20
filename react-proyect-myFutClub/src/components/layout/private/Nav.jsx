import React from 'react';
import { NavLink } from 'react-router';

export const Nav = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-list-element'>
                    <NavLink to={'/myfutclub/home'}>Home</NavLink>
                </li>
                <li className='navbar-list-element'>
                    Mi perfil
                </li>
                <li className='navbar-list-element'>
                    Ajustes
                </li>
                <li className='navbar-list-element'>
                    <NavLink to={'/myfutclub/logout'}>Cerrar sesión</NavLink>
                </li>
            </ul>
        </nav>
    )
}
