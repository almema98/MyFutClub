import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { Navigate, Outlet } from 'react-router';
import { Head } from './Head';

export const PrivateLayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return ( <p>Cargando...</p> )
    } else {

        return (
            <div className='privateLayout-layout'>
                {/*Layout*/}
                <Head />
                <section className='privateLayout__content'>
                    {/*Check if the user is loged*/}
                    { auth.id_user
                        ?
                            <Outlet />
                        :
                            <Navigate to={'/login'} />
                    }
                </section>
            </div>
        )
    }
}
