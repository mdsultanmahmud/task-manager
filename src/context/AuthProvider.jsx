import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext() 
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    // create an user 
    const RegisterUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserPro = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    // sign in a user 
    const Login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout an user 
    const lgOut = () =>{
        return signOut(auth)
    }
    // login with google 
    const loginGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // get current user 
        useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser)  =>{
                console.log(currentUser)
                if(currentUser){
                    setUser(currentUser)
                }else{
                    setUser({})
                }
            })
            return () => unsubscribe()
        },[])

    const AuthInfo = {user, RegisterUser, updateUserPro, lgOut,Login, loginGoogle}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;