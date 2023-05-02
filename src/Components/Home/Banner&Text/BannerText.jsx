import React, { useContext } from 'react';
import './BannerText.css'

const BannerText = () => {
    // const datas = useContext(AuthContext)
    // console.log(datas)
    return (
        <div className='banner-container mx-32 my-56'>
            <div>
                <h1 className='text-6xl font-bold '>Welcome to <br /> <span className='text-orange-400'>Food</span> Network</h1>
                <p>Food Network is a television and online platform dedicated to all things food. It features a wide range of programming, including cooking shows, culinary competitions, food travel documentaries, and more.




                </p>
            </div>
            <img src="./../../../assignment-10-asset/img/banner.png" alt="" />
        </div>
    );
};

export default BannerText;