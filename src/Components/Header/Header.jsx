import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between mx-32'>
            <div>
                <h1 className='text-4xl'>Food Network</h1>
            </div>
            <div className='text-2xl flex gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Registration</Link>
            <Link to='/blog'>Blog</Link>
            
        </div>
        </div>
        </div>
    );
};

export default Header;