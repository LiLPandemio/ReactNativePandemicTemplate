import React, { createContext, useState } from 'react'; //Default react native import and useState hook import

export default ({ children }) => {
    const [IsLoggedIn, setIsLoggedIn] = useState({});               //This will define is user is logged in or not dynamically
    return (
        <AuthContext.Provider value={[IsLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthContext = createContext(); //This will create and export the context