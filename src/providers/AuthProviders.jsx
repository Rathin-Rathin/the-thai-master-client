import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const user = { displayName: 'Rahul' }
    //Create user with email & password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Sing in with email & password
    const signInWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
   
    const authInfo = {
        user,
        createUser,
        signInWithEmailAndPass,
        auth,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;