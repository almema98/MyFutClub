import React from 'react';
import iconTeams from '../../../../../assets/icons/icon-team.png';
import { Link } from 'react-router';

export const MenuCoach = () => {
    return (
        <>
            <Link to={'/myfutclub/mis-equipos'}>
                <div className='menu-item__container'>
                    <img src={iconTeams} alt='icon-MisEquipos' className='menu-item-icon' />
                    <span className='menu-item-name'>Mis equipos</span>
                </div>
            </Link>

            <div className='menu-item__container'>

                <span className='menu-item-name'>Mi Club</span>
            </div>

            <div className='menu-item__container'>

                <span className='menu-item-name'>Otros</span>
            </div>
        </>
    )
}
