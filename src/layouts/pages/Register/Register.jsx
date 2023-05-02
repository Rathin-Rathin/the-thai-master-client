import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pt-3">
            <div className="card  w-full md:w-5/12  shadow-2xl bg-base-100">
                <h1 className='text-2xl text-center mt-6 font-bold'>Register Please !</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Your photo url" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" name='email' placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            <small>Already Register ? <Link className='text-blue-600 font-bold' to='/login'>Login</Link> </small>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;