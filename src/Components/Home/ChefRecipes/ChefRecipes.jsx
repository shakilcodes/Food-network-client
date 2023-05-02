import React from 'react';
import './ChefRecipes.css'
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesSection from './RecipesSection';

const ChefRecipes = () => {

    const id = useParams()
    const singleData = useLoaderData()
    return (
        <div className='mx-32'>
            <h1 className='text-5xl text-center mt-10 font-bold'>Chef Recipes</h1>
           <section>
           <div className='chefRecipes  flex'>
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
           </section>
            <hr className='my-5' />
           <section className=''>
            <div className='md:grid grid-cols-2 justify-center items-center gap-5'>
                {
                    singleData.recipes.map(sd => <RecipesSection recipes={sd}></RecipesSection>)
                }
            </div>
           </section>

        </div>
    );
};

export default ChefRecipes;