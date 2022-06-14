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