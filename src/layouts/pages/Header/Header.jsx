import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../public/thai_logo1.png'
const Header = () => {
    const user = false;
    return (
        <nav className='px-4  md:bg-black md:flex items-center justify-around'>
            <div className=' flex justify-between md:justify-normal  gap-4 items-center'>
                <img className='w-[50px]' src={logo} alt="" />
                <h1 className='text-indigo-400 md:text-gray-600 font-bold text-xl'>The Thai Master</h1>
            </div>
           
                <div className='md:flex gap-3 items-center'>
                    <p className=''>
                        <NavLink to='/home' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold text-gray-600')}>Home</NavLink>
                    </p>
                    <p className=''>
                        <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold text-gray-600')}>Blogs</NavLink>
                    </p>
                   
                <p className=''>{
                    user ?
                    <img className='w-[50px]' src={logo} alt="" />
                        :<NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold')}>Login</NavLink>
                    }
                    </p>
                </div>

           
        </nav>
    );
};

export default Header;