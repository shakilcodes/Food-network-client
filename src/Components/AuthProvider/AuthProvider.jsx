import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] =useState(null)
const [isLoading, setIsloading] = useState(true)

const registration = (email, password) =>{
    setIsloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const signUp = (email, password) =>{
    setIsloading(true)
    return  signInWithEmailAndPassword(auth, email, password)
}

const gitHubSign = (Provider) =>{
    setIsloading(true)
    signInWithPopup(auth, Provider)
}

const handleSignOut =()=>{
    signOut(auth)
}


useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setIsloading(false)
    })
    return ()=>{
        unsubcribe();
    }
    
    
},[])
const provider = new GoogleAuthProvider()

const googleSignUp = () =>{
    setIsloading(true)
    signInWithPopup(auth, provider)
}

    const authinfo = {
        user,
        registration,
        signUp,
        googleSignUp,
        handleSignOut,
        isLoading,
        gitHubSign

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;