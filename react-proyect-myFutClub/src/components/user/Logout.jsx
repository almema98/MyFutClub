import React from 'react'
import useAuth from '../../hooks/useAuth'

export const Logout = () => {

    const {setAuth} = useAuth();

    /* Method to logout */
    const logout = () => {
        // Clean auth provider
        setAuth({});

        // Remove token and user's data from local storage.
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to login page.
        window.location.reload();
    }

    return (
        <>
            <h1 className='title'>Cerrar sesión</h1>

            <div className='content__container'>
                <p className='spam'>¿Desea cerrar la sesión y salir de MyFutClub?</p>
                <input type='submit' value='Salir' className='button' onClick={logout}/>
            </div>
        </>
    )
}
