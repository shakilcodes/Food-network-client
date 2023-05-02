import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main mt-32'>
            <div className='footer-main'>
            <div className='footer-container'>
                <div className='md:flex justify-around gap-12 footer-info md:mx-32 text-center pt-20 pb-10'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>Food Network</h1>
                        <p className='mb-5'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                        <img className='mx-auto' src="./../../../career-hub-main/assets/Icons/Group 9969.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl mb-5'>Company</h1>
                        <p>About</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        
                    </div>
                   
                    <div>
                        <h1 className='text-2xl mb-5'>Support</h1>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div>
                        <h1 className='text-2xl mb-5'>Contact</h1>
                        <p className='mb-5'>524 BroadWay, NYC</p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>
                <hr className='mx-32' />
            </div>
            <div className=' flex justify-between mx-32 my-10'>
                <h1>@2023 Food Network. All Rights Reserved</h1>
                <h1>Powered by Job Food Network</h1>
            </div>
        </div>
        </div>
    );
};

export default Footer;