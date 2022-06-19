/**
 * This file contains a basic context providing a global state in form of context so you can update the state everywhere.
 */
import React, { createContext, useState } from 'react';

export default ({ children }) => {
    const [IsLoggedIn, setIsLoggedIn] = useState({});
    return (
        <AuthContext.Provider value={[IsLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthContext = createContext();