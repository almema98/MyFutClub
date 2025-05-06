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
                    Plantilla
                </li>
                <li className='navbar-list-element'>
                    Asistencia
                </li>
            </ul>
        </nav>
    )
}
