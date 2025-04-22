import React from 'react'
import { Outlet } from 'react-router'

export const PublicLayout = () => {
    return (
        <div className='publicLayout__container'>
            
            <Outlet />
        
        </div>
    )
}
