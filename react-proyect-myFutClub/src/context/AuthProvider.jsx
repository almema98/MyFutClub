import React, { createContext, useEffect, useState } from 'react';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // States
    const [auth, setAuth] = useState({});   // Loged user's data
    const [loading, setLoading] = useState(true);

    // Check the token when the component is reloaded.
    useEffect(() => {
        authenticateUser();
    }, []);


    const authenticateUser = async () => {
        // Get token and user data from local storage.
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        // Check that the data exists.
        if (!token || !userData) {
            setLoading(false);
            return false;
        }

        // Transform user's data to JSON object.
        const userDataJson = JSON.parse(userData);

        // Request to get complete user's data
        const requestProfile = await fetch(Global.url + "user/profile/" + userDataJson.id_user, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : token
            }
        });
        
        const dataProfile = await requestProfile.json();

        // Check that the response is success.
        if (dataProfile.status === "error") {

            // Detect the error.
            switch (dataProfile.message) {

                // Expired token
                case 'Forbidden: invalid token.' :
                    // Delete token and user's data from local storage.
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');

                    // Set loading state.
                    setLoading(false);

                    // Redirect to the login page.
                    window.location.reload();
                break;
            }
        }

        // Set user's data in the auth state.
        setAuth(dataProfile.user);
        setLoading(false);
    }

    return ( <AuthContext.Provider value= {{ auth, setAuth, loading }}>
        { children }    {/* Child component to be loaded when the context is used. */}
    </AuthContext.Provider>)
}

export default AuthContext;
