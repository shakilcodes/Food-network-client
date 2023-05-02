import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesSection = ({ recipes }) => {

    const toastHandle = () =>{
        console.log('cliked')
        const notify = () => toast("Wow so easy!");
    }
    // console.log(recipes)
    return (
        <div className=''>
            <div className=" w-auto bg-base-100 shadow-xl">
                <figure className="p-2 mt-2">
                </figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p><span className='font-bold text-2xl'>Recipes Name: {recipes.title}</span> </p>
                    <div>
                        <h1 className='font-bold text-xl'>Ingredients</h1>
                        {
                            recipes.ingredients.map(i =>
                                <ul>
                                    <li>{i}</li>
                                </ul>)
                        }
                    </div>
                    <p className='text-xl font-bold'>Cooking Mathod</p>
                    <p>{recipes.cookingMethod}</p>

                    <p><span className='text-xl font-bold'>Rating</span>: {recipes.rating
                    }</p>
                    <div className="card-actions">
                        <Link onClick={toastHandle} className="btn btn-primary">Favorite</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesSection;