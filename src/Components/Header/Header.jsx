import React from 'react';
import './Heder.css'
import { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import NavPic from './NavPic';

const Header = () => {
    const { user, isLoading, handleSignOut } = useContext(AuthContext)
    // console.log(user.user.photoURL)
    
    // if (isLoading) {
    //     return
    // }
    // if(!user){
    //     return 
    // }

    const signOut =()=>{
        handleSignOut()
        .then(resut => console.log(resut))
        .catch(error => console.log(error))
    }
    return (
        <div className='bg-gray-600 py-2 text-white rounded-lg'>
            <div className='flex justify-between items-center mx-32'>
                <div>
                    <h1 className='text-4xl'>Food Network</h1>
                </div>
                <div className='text-2xl flex items-center gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/registration'>Registration</Link>
                    <Link to='/blog'>Blog</Link>

                    {
                        <NavPic user = {user}></NavPic>
                        
                    }
                    {
                        user == null ? "" : <Link className='btn' onClick={signOut}>SignOut</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;