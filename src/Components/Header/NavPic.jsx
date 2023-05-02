import React from 'react';
import { Link } from 'react-router-dom';

const NavPic = ({user}) => {
    // if(user == null){
    //     <button>show</button>
    //     return
    // }
    return (
        <div>
            {
                user?.photoURL == null ? <Link to='/login'><button className='btn'>LogIn</button></Link> : <img className='email-img' src={user.photoURL} alt="" />
            }
            <div>
               
            </div>
        </div>
    );
};

export default NavPic;