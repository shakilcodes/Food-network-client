import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
const {isLoading, user} = useContext(AuthContext)
const location = useLocation();

if(isLoading){
    return <p className='text-7xl text-center font-bold mt-32'><progress className="progress w-56"></progress>

    </p>
}

// console.log(user)
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'  replace></Navigate>;
};

export default PrivetRoutes;