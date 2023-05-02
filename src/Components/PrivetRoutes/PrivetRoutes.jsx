import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
const {isLoading, user} = useContext(AuthContext)

if(isLoading){
    return 'wating//'
}

// console.log(user)
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivetRoutes;