import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../../../hooks/useAuth'

export const PublicLayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return (<p>Cargando...</p>)
    } else {
        return (
            <section className='publicLayout__container'>
                
                {/* Check if the user is logged.*/}
                { !auth.id_user 
                    ?
                        <Outlet />
                    :
                        <Navigate to={'/myfutclub'} />
                }
            
            </section>
        )
    }
}
