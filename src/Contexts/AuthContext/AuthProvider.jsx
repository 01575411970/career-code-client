
import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../../Firbase/Firbase.init';

const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true)
    const createUser = (email ,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth  ,email,password)
    }

    const authInfo = {
        loading,
        createUser
    }
    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;