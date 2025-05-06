import React from 'react';
import iconTeam from '../../../assets/icons/icon-team.png';

export const Home = () => {
    return (
        <>
            <h1 className='title'>Home</h1>

            <div className='content__container menu__container'>

                <div className='menu-item__container'>
                    <img src={iconTeam} alt='icon-Plantilla' className='menu-item-icon'/>
                    <span className='menu-item-name'>Plantilla</span>
                </div>

                <div className='menu-item__container'>
                    
                    <span className='menu-item-name'>Estadísticas</span>
                </div>

                <div className='menu-item__container'>
                    
                    <span className='menu-item-name'>Asistencia</span>
                </div>
            </div>
        </>
    )
}
