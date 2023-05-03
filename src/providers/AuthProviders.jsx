import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    //Create user with email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Sing in with email & password
    const signInWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false); 
        })
         return () => {
             unsubscribe();
         }
     },[])
    //Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        signInWithEmailAndPass,
        auth,
        loading,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;