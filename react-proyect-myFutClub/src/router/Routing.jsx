import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Login } from '../components/user/Login';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Grupo de rutas públicas */}
                <Route path='/' element={<PublicLayout />} >
                    <Route index element={<Login />} />
                    <Route path='login' element={<Login />} />
                </Route>


                {/* Grupo de rutas privadas */}
                <Route path='/myFutClub' element={<PrivateLayout />} >
                </Route>

                {/* Ruta de error */}
                <Route path='*' element={
                    <>
                        <div>
                            <h1>404 Página no encontrada</h1>
                            <Link to='/'>Volver a la página de inicio</Link>
                        </div>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}
