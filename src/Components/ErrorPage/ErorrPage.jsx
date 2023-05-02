import React from 'react';
import { Link } from 'react-router-dom';
import './ErorrPage.css'

const ErorrPage = () => {
    return (
        <div className='error '>
            <h1 className='text-7xl text-center mt-32'>Page Not Found </h1>
            <img src="/../../assignment-10-asset/img/opps.png" alt="" />
            <div className='flex  btn'>
            <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErorrPage;