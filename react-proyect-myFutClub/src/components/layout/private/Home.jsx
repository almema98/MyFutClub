import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { MenuCoach } from './menus/coach/MenuCoach';
import { MenuAdmin } from './menus/admin/MenuAdmin';

export const Home = () => {

    const {auth} = useAuth();

    return (
        <>
            <h1 className='title'>HOME</h1>

            <div className='content__container menu__container'>

                {/* Load a specific menu depending on the user's role.*/}
                { auth.role === 'ADMIN' && <MenuAdmin /> }
                { auth.role === 'COACH' && <MenuCoach /> }
                

            </div>
        </>
    )
}
