import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerText from './Banner&Text/BannerText';
import ChefCard from './ChefCard';

const Home = () => {
    const datas = useLoaderData();
    console.log(datas);
    return (
        <div>
            <div>
                <BannerText></BannerText>
            </div>

            <div className='grid grid-cols-3 gap-5 mx-32'>
            {
                datas.map(d => <ChefCard data= {d} key={d.id}></ChefCard>)
            }
            </div>
        </div>
    );
};

export default Home;