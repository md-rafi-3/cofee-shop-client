import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

const AuthProvider = ({children}) => {
   

    const createUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
   
   const userInfo={
      createUserWithEmail,
   }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;