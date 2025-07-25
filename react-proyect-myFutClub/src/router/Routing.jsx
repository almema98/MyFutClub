import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Link, Outlet } from 'react-router';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Login } from '../components/user/Login';
import { AuthProvider } from '../context/AuthProvider';
import { Home } from '../components/layout/private/Home';
import { Logout } from '../components/user/Logout';
import { MyTeams } from '../components/layout/private/menus/coach/team/MyTeams';
import { SquadList } from '../components/team/SquadList';
import { MenuTeam } from '../components/layout/private/menus/coach/team/MenuTeam';
import { Attendance } from '../components/team/Attendance';



export const Routing = () => {
    return (
        <BrowserRouter basename='/MyFutClub/'>
            <AuthProvider>
                <Routes>
                    {/* Public route group */}
                    <Route path='/' element={<PublicLayout />} >
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                    </Route>


                    {/* Private route group */}
                    <Route path='/myfutclub' element={<PrivateLayout />} >
                        <Route index element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path='mis-equipos' element={<Outlet />}>
                            <Route index element={<MyTeams />} />
                            <Route path='menu-equipo' element={<Outlet />} >
                                <Route index element={<MenuTeam />} />
                                <Route path='plantilla' element={<Outlet />} >
                                    <Route index element={<SquadList />} />
                                </Route>
                                <Route path='asistencia' element={<Outlet />} >
                                    <Route index element={<Attendance />} />
                                </Route>
                            </Route>
                        </Route>
                        <Route path='logout' element={<Logout />} />
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
