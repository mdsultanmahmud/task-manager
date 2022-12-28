import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {name: 'Sutlan', email:'sultanmahmd@gmail.com'}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;