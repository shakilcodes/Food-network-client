import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ExtraSection from '../ExtraTwoSection/ExtraSection';
import BannerText from './Banner&Text/BannerText';
import ChefCard from './ChefCard';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const {isLoading} = useContext(AuthContext)
    if(isLoading){
        return <p className='text-7xl text-center font-bold mt-32'><progress className="progress w-56"></progress></p>
    }
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