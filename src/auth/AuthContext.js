import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext with default values
const AuthContext = createContext({ user: null, logout: () => {} });

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}`)
            .then(response => {
                if (response.data.Status === 'Success') {
                    setUser({ name: response.data.name });
                } else {
                    setUser(null);
                }
            })
            .catch(error => {
                console.log('Error:', error);
                setUser(null);
            });
    }, []);

    const logout = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/logout`).then(() => {
            setUser(null);
        }).catch(err => console.log(err));
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
