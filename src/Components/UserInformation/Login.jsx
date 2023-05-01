import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {signUp} = useContext(AuthContext)

    const loginHandle = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        signUp(email, password)
       
        .then(result=>{
            console.log(result)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className='text-7xl text-center mt-10'>Please Login</h1>

           <form onSubmit={loginHandle}>
           <div className="hero pt-10">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <label className="label">
                                    <a href="/registration" className="label-text-alt link link-hover">First time this website? <span className='text-primary'>Registration</span></a>
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

export default Login;