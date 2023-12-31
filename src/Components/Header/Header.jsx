import React from 'react';
import './Heder.css'
import { useContext } from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import NavPic from './NavPic';
import ActiveLink from '../ActiveLInk/ActiveLink';

const Header = () => {
    const { user, isLoading, handleSignOut } = useContext(AuthContext)

    const signOut = () => {
        handleSignOut()
            .then(resut => console.log(resut))
            .catch(error => console.log(error))
    }
    return (
        <nav className='bg-black fixed top-0 right-0 left-0
        '>
            <section className='max-w-[1280px] mx-auto'>
                <div className=' py-2 text-white rounded-lg'>
                    <div className='flex justify-between items-center '>
                        <div>
                            <h1 className=' hidden md:block md:text-4xl'>Food Network</h1>
                        </div>
                        <div className='md:text-2xl flex items-center gap-5'>
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>




                        </div>
                        <div>
                            {
                                <NavPic user={user}></NavPic>

                            }
                            {
                                user == null ? "" : <Link className='' onClick={signOut}>SignOut</Link>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};
export default Header;