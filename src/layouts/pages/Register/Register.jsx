import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaGoogle, FaGithub,FaCheck,FaEye } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';
const Register = () => {
    const { user, createUser } = useContext(AuthContext);

    const [passError, setPassError] = useState(null);
    const [success, setSuccess] = useState(null);
    //Handle user 
    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setPassError('Password is less then 6 char!');
        } else {
            setPassError(null);
        }
    }
    //Create user with email and password
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Sign up success!')
                form.reset();
                console.log(user);
            })
            .catch(error => {
                const errorMassage = error.message;
                setPassError(errorMassage);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 pt-3">
            <div className="card  w-full md:w-5/12  shadow-2xl bg-base-100">
                <h1 className='text-2xl text-center mt-6 font-bold'>Register Please !</h1>
                <form onSubmit={handleSubmit} className="card-body">
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
                        <input type="text" name='photo' placeholder="Your photo url" className="input input-bordered" />
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
                        <p className=''>
                        <input onChange={handlePassword} type="password" name='password' placeholder="Your password" className=" w-full input input-bordered" required />
                        </p>
                       
                        <small className='flex items-center gap-2 text-red-600 italic mt-3'>
                            {passError ? <span><FaTimes /></span> : ''}
                            {passError}</small>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            <small>Already Register ? <Link className='text-blue-600 font-bold' to='/login'>Login</Link> </small>
                        </label>
                        <small className='flex items-center gap-2 text-green-600 italic mt-3'>
                            {success ? <span><FaCheck /></span> : ''}
                            {success}</small>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-gray">Submit</button>
                    </div>
                   
                </form>
            </div>

        </div>
    );
};

export default Register;