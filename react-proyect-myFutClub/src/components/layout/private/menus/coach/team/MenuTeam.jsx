import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router';
import { Global } from '../../../../../../helpers/Global';
import iconAttendance from '../../../../../../assets/icons/icon-attendance.png';
import iconSquad from '../../../../../../assets/icons/icon-squad.png';

export const MenuTeam = () => {

    // Use the location hook to get the id_team from the parent component.
    const location = useLocation();
    const { idTeam, teamName, clubShield } = location.state;

    return (
        <>
            <h1 className='title'>{teamName}</h1>

            <img src={Global.url + "club/getClubShield/" + clubShield} alt={teamName + " - escudo"} className='club-shield-team' />

            <div className='content__container menu__container'>
                <Link to={'/myfutclub/mis-equipos/menu-equipo/plantilla'}
                    state={{ idTeam, teamName, clubShield }}
                >
                    <div className='menu-item__container'>
                        <img src={iconSquad} alt='icon-Plantilla' className='menu-item-icon' />
                        <span className='menu-item-name'>Plantilla</span>
                    </div>
                </Link>

                <Link to={'/myfutclub/mis-equipos/menu-equipo/asistencia'}
                    state={{ idTeam, teamName, clubShield }}
                >
                    <div className='menu-item__container'>
                        <img src={iconAttendance} alt='icon-Asistencia' className='menu-item-icon' />
                        <span className='menu-item-name'>Asistencia</span>
                    </div>
                </Link>
            </div>
        </>
    )
}