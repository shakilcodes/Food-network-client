import React from 'react';

const ChefCard = ({ data }) => {
    // console.log(data)
    return (
        <div className='flex'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-2 mt-2">
                    <img src="./../../../assignment-10-asset/img/chef-one.jpeg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;