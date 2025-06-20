import React from 'react';
import iconDivision from '../../../../../assets/icons/icon-division.png';
import iconClub from '../../../../../assets/icons/icon-club.png';

import { Link } from 'react-router';

export const MenuAdmin = () => {
    return (
        <>
            <Link to={'/myfutclub'}>
                <div className='menu-item__container'>
                    <img src={iconDivision} alt='icon-Divisiones' className='menu-item-icon' />
                    <span className='menu-item-name'>Divisiones</span>
                </div>
            </Link>

            <div className='menu-item__container'>
                <img src={iconClub} alt='icon-Club' className='menu-item-icon' />
                <span className='menu-item-name'>Clubes</span>
            </div>

            <div className='menu-item__container'>

                <span className='menu-item-name'>Equipos</span>
            </div>
        </>
    )
}
