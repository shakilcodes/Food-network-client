import React, { useContext } from 'react';
import './BannerText.css'
import LazyLoad from 'react-lazy-load';


const BannerText = () => {
    return (
        <div className=''>
            <div className='banner-container px-3'>
                <div className='max-w-[1280px] mx-auto'>
                    <div className='grid justify-center pt-[250px]'>
                        <h1 className='text-white 
                    text-7xl font-bold text-center'>Deliciouse Food</h1>
                        <p className='text-white w-[600px] text-center my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi explicabo corporis aliquam debitis error ullam nisi consequatur blanditiis facere.</p>
                        <div className='text-white mx-auto '>
                            <button className='border-[2px] border-orange-500 p-3 rounded-full text-orange-500 hover:bg-white'>Discover More</button>
                            <span className=''> <button className='border-[2px] border-orange-500 p-3 rounded-full text-orange-500 hover:bg-white'>Book A Table</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerText;