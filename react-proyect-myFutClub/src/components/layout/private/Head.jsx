import React from 'react';
import logo from '../../../assets/img/myFutClub-logo.png';
import avatar from '../../../assets/img/default.png';
import { Nav } from './Nav';
import useAuth from '../../../hooks/useAuth';

export const Head = () => {

    const {auth} = useAuth();

    return (
        <header className='header'>
            <div className='header-logo__container'>
                <img src={ logo } alt='logo-MyFutClub'/>
            </div>

            <div className='header-avatar__container'>
                {auth.profile_image !== "default.png"
                    ?
                        <img src={auth.profile_image} alt='Foto de perfil' className='avatar-header' />
                    :
                        <img src={avatar} alt='Foto de perfil' className='avatar-header' />
                }
            </div>
            
            <Nav />
        </header>
    )
}
