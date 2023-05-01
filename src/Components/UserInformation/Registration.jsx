import React from 'react';

const Registration = () => {

    const registrationHandle = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        registration(email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error => console.log(error))
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
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
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