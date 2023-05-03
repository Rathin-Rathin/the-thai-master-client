import React from 'react';
import error from '../../../assets/errormessage.jpg';
import { FaSadCry } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <div className='mt-3 flex justify-center gap-2 items-center w-6/12 mx-auto'>
                <h1 className='text-4xl font-bold '>Page not found </h1> <FaSadCry className='text-3xl' />
            </div>
            <img className='mx-auto mt-6' src={error} alt="" />
            <div className='flex justify-center gap-2 items-center mt-6'>
            <Link to='/goHome'  className='btn btn-primary'>Go Home</Link>
           </div>
        </div>
    );
};

export default Error;