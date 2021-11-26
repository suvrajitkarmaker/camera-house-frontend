import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const AuthContext = createContext();
//this context will use for authorization.it sending value by allcontext
const AuthProvider = (props) => {
    const { children } = props;
    //call usefirebase to store data in allcontext
    const allContext = useFirebase();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;