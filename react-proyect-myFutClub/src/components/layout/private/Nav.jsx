import React from 'react';
import { Link } from 'react-router';

export const Nav = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-list-element'>
                    <Link to={'/myFutClub/home'}>Home</Link>
                </li>
                <li className='navbar-list-element'>
                    Mi perfil
                </li>
                <li className='navbar-list-element'>
                    Ajustes
                </li>
                <li className='navbar-list-element'>
                    <Link to={'/myFutClub/logout'}>Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
    )
}
