import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,deleteUser } from 'firebase/auth';
import { auth } from '../../firebase.config';



const AuthProvider = ({children}) => {

    

    const createUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }
     
    
    const deleteUsers=()=>{
        const user=auth.currentUser;
        return deleteUser(user)
    }
   
   const userInfo={
      createUserWithEmail,
      signInUser,
      deleteUsers
     
   }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;