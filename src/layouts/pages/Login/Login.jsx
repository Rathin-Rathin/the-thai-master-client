import React, { useContext, useState } from 'react';
import { FaCheck, FaGithub, FaGoogle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
    const [passError, setPassError] = useState(null);
    const [success, setSuccess] = useState(null);
    //Use context
    const { signInWithEmailAndPass } = useContext(AuthContext);
    //Handle sign in with email & password
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPass(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setPassError(null);
            })
            .catch(error => {
                const errorMassage = error.message;
                setPassError(errorMassage);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 pt-3">
        <div className="card  w-full md:w-5/12  shadow-2xl bg-base-100">
            <h1 className='text-2xl text-center mt-6 font-bold'>Login Please !</h1>
            <form onSubmit={handleSignIn} className="card-body">
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
                    <p className=''>
                    <input  type="password" name='password' placeholder="Your password" className=" w-full input input-bordered" required />
                    </p>
                   
                    <small className='flex items-center gap-2 text-red-600 italic mt-3'>
                        {passError ? <span><FaTimes /></span> : ''}
                        {passError}</small>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        <small>Don't have account ? <Link className='text-blue-600 font-bold' to='/register'>Register</Link> </small>
                    </label>
                    <small className='flex items-center gap-2 text-green-600 italic mt-3'>
                        {success ? <span><FaCheck /></span> : ''}
                        {success}</small>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-gray">Submit</button>
                </div>
                <div className='mt-3 font-semibold flex justify-between'>
                    <Link className='underline text-blue-600 flex gap-2 items-center'><FaGoogle className='text-green-600 ' />Sign in with google</Link>
                    <Link className='underline flex gap-2 items-center'><FaGithub />Sign in with github</Link>
                </div>
            </form>
        </div>

    </div>
    );
};

export default Login;