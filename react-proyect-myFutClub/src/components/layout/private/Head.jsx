import React from 'react';
import logo from '../../../assets/img/myFutClub-logo.png';
import { Nav } from './Nav';

export const Head = () => {
    return (
        <header className='header'>
            <div className='header-logo__container'>
                <img src={ logo } alt='logo-MyFutClub'/>
            </div>
            
            <Nav />
        </header>
    )
}
