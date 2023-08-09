import React from 'react';

const OurStory = () => {
    return (
        <div className='mt-32'>
            <div className='md:flex justify-between items-center'>
                <div className='w-[50p'>
                    <h1 className='text-3xl font-bold text-orange-500'>Our Story</h1>
                    <h1 className='text-5xl font-bold'>Welcome to Food <br /> Network  Resuturant</h1>
                    <p className='w-[600px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque ducimus tempora amet eligendi ad repudiandae nulla, non beatae error quasi corporis facere voluptates eveniet maxime accusamus quibusdam esse eum tempore placeat cupiditate provident, ut necessitatibus. Non at repudiandae, eos qui quidem reiciendis, natus id eveniet iusto similique deleniti illo.</p>
                    <button className='p-2 mt-5 border-[2px] border-orange-500 rounded-full px-5 text-orange-500 font-bold hover:bg-orange-500 hover:text-white'>Learn More</button>
                </div>
                <div>
                    <img className='w-[600px]' src="https://i.postimg.cc/SQ89rW3G/1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurStory;