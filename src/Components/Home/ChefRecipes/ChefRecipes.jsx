import React from 'react';
import './ChefRecipes.css'
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {

    const id = useParams()
    const singleData = useLoaderData()
    console.log(singleData);
    return (
        <div>
            <h1 className='text-5xl text-center mt-10'>Chef Recipes Section</h1>
            <div className='chefRecipes mx-32 flex'>
            <div className=''>
            <img className='' src='./../../../../assignment-10-asset/img/chef-two.jpeg' alt="" />
            </div>
            <div className=' mt-5'>
            <h1 className='text-4xl font-semibold'>Chef: {singleData.name}</h1>
            <h1 className='text-xl font-bold mt-5 mb-2'>Recipes: {singleData.numberOfRecipes}</h1>
            <p><span className='font-bold'>Bio</span>: {singleData.shortBio}</p>
            <h1><span className='font-bold'>Experience:</span> {singleData.yearsOfExperience}</h1>
            <h1><span className='font-bold'>Likes:</span> {singleData.likes}</h1>
            </div>
        </div>
        </div>
    );
};

export default ChefRecipes;