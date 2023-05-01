import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] =useState(null)

const registration = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const signUp = (email, password) =>{
    return  signInWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
    })
    return ()=>{
        unsubcribe();
    }
    
},[])

    const authinfo = {
        user,
        registration,
        signUp

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;