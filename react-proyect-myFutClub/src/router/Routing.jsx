import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Login } from '../components/user/Login';
import { AuthProvider } from '../context/AuthProvider';
import { Home } from '../components/layout/private/Home';

export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Public route group */}
                    <Route path='/' element={<PublicLayout />} >
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                    </Route>


                    {/* Private route group */}
                    <Route path='/myFutClub' element={<PrivateLayout />} >
                        <Route index element={<Home />} />
                        <Route path='home' element={<Home />} />
                    </Route>

                    {/* Error route */}
                    <Route path='*' element={
                        <>
                            <div>
                                <h1>404 Página no encontrada</h1>
                                <Link to='/'>Volver a la página de inicio</Link>
                            </div>
                        </>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
