import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // States
    const [auth, setAuth] = useState({});   // Loged user's data

    // Check the token when the component is reloaded.
    useEffect(() => {
        authenticateUser();
    }, []);


    const authenticateUser = () => {
        // Get token and user data from local storage.
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        // Check that the data exists.
        if (!token || !userData) {
            return false;
        }

        // Transform user's data to JSON object.
        const userDataJson = JSON.parse(userData);

        // Request to get complete user's data
        
        // Set user's data in the auth state.
    }

    return ( <AuthContext.Provider value= {{ auth, setAuth }}>
        { children }    {/* Child component to be loaded when the context is used. */}
    </AuthContext.Provider>)
}

export default AuthContext;
