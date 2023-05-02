import React from 'react';

const ExtraSection = () => {
    return (
        <section>
            <div className='md:mx-32 px-2 md:my-24 my-10 md:grid grid-cols-2 gap-5 justify-around'>
                <div>
                    <h1 className='text-4xl mb-10 font-bold'>Weekly Speckial</h1>
                    <div className='md:flex justify-center items-center gap-3'>
                        <img className='md:h-64 md:w-64 rounded-lg' src="https://i.postimg.cc/Kvt1Zt1G/d3db718a011f94f39dd49b576d785b08.jpg" alt="" />
                        <div>
                            <h1 className='font-bold text-xl'>Pimento Cheese Potato Skins</h1>
                            <p>If there’s anything better than the perfect baked potato, it would have to be a twice baked potato. I’m sure everybody’s...</p>
                            <button className='text-primary'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-4xl mt-10 md:mb-20 font-bold'>News and Events</h1>
                    <h1 className='text-xl'>Best Bread pairing for Barbeque?</h1>
                    <p className='mb-5'>Quis sed mid elit, risus aliquet placerat. Pid et, vel phasellus augue... <span className='text-primary'> more</span></p>

                    <p className='text-xl'>Baking Question</p>
                    <p>Quis sed mid elit, risus aliquet placerat. Pid et, vel phasellus augue... <span className='text-primary'> more</span></p>
                </div>

                <div>
                </div>
            </div>
            <section className='md:mx-32 px-3'>
                <h1 className='font-bold text-4xl text-center mb-10'>MISC Recipes</h1>

                <div className='md:flex gap-5 justify-center items-center'>
                    <img className='md:h-32 md:w-64 rounded-xl' src="https://i.postimg.cc/RFYVQL0H/pimento-Cheese-potato-skins-Recipe-1.jpg" alt="" />
                    <div>
                    <h1 className='font-semibold'>Chocolate Earl Grey Pots de Creme Recipe</h1>
                    <h1>Price: $15</h1>
                    </div>

                </div>
                <div className='md:flex gap-5 justify-center items-center my-5'>
                    <img className='md:h-32 md:w-64 rounded-xl' src="https://i.postimg.cc/1Rj4SssK/pimento-Potatoes-edited-scaled.jpg" alt="" />
                    <div>
                    <h1 className='font-semibold'>Chocolate Earl Grey Pots de Creme Recipe</h1>
                    <h1>Price: $15</h1>
                    </div>

                </div>
                <div className='md:flex gap-5 justify-center items-center'>
                    <img className='md:h-40 md:w-64 rounded-xl' src="https://i.postimg.cc/s2VNwFBk/download.jpg" alt="" />
                    <div>
                    <h1 className='font-semibold'>Chocolate Earl Grey Pots de Creme Recipe</h1>
                    <h1>Price: $15</h1>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default ExtraSection;