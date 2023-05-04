import React, { useContext } from 'react';
import './BannerText.css'
import LazyLoad from 'react-lazy-load';


const BannerText = () => {
    return (
        <div className='banner-container px-3 md:mx-32 mt-5 md:my-56'>
            <div>
                <h1 className='text-3xl text-center md:text-start md:text-6xl font-bold '>Welcome to <br /> <span className='text-orange-400'>Food</span> Network</h1>
                <p>Food Network is a television and online platform dedicated to all things food. It features a wide range of programming, including cooking shows, culinary competitions, food travel documentaries, and more.




                </p>
            </div>
            <LazyLoad threshold={.5}>
            <img src="https://i.postimg.cc/3w0RcpQQ/bannerimages.jpg" alt="" />
            </LazyLoad>
        </div>
    );
};

export default BannerText;