import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ExtraSection from '../ExtraTwoSection/ExtraSection';
import BannerText from './Banner&Text/BannerText';
import ChefCard from './ChefCard';

const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            <div>
                <BannerText></BannerText>
            </div>

            <div className='md:grid grid-cols-3 gap-5 md:mx-32 mt-10'>
            {
                datas.map(d => <ChefCard data= {d} key={d.id}></ChefCard>)
            }
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;