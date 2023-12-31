

import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Registration = () => {
    const navigate = useNavigate()
    const [error, setError] =useState("")
    const {registration, googleSignUp, updateUser, isLoading, user} = useContext(AuthContext)
// const userData = user;
// console.log(userData)
    // if(isLoading){
    //     return "loadinnggg....."
    // }

    const registrationHandle = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        const photo = event.target.photo.value
        // const userDAta = user
        console.log(email, password, photo)
        registration(email, password)
        
        .then(result=>{
            const loggedUser = result.user;
            displayName(name, photo, loggedUser)
            setError("")
            event.target.reset();
            navigate('/')
            // console.log(loggedUser)
        })
        .catch(error => {
            setError(error.message)
            console.log(error)
        })
        
        
    }

    

    const displayName = (name, photo, loggeduser)=>{
        // console.log(loggeduser)
        updateProfile( loggeduser, {
            displayName: name, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    return (
        <div>
            <h1 className='text-7xl mt-10 text-center'>Registraion Please</h1>

            <form onSubmit={registrationHandle}>
            <div className="hero pt-10">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <p className='text-warning'>{error}</p>
                                <label className="label">
                                    <span className="label-text">Full Name (Optional)</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL (Optional)</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email (Requred)</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password (Requred)</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registraion</button>
                                <label className="label">
                                    <a href="/login" className="label-text-alt link link-hover">Already have account? <span className='text-primary'>Login</span></a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>

           
        </div>
    );
};

export default Registration;