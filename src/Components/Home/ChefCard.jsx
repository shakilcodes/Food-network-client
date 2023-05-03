import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ data }) => {
    console.log(data)
    return (
        <div className='md:flex'>
            <div className=" md:w-96 bg-base-100 shadow-xl">
                <figure className="p-2 mt-2">
                    <LazyLoad threshold={.5}>
                    <img src={data.picture}alt="Shoes" className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>Repes: {data.numberOfRecipes}</p>
                    <p>Experience {data.yearsOfExperience}</p>
                    <p>Likes: {data.likes}k</p>
                    <div className="card-actions">
                        <Link to={`/recipes/${data.id}`} className="btn btn-primary">View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;