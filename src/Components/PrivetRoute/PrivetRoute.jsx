import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;