import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../public/thai_logo1.png'
import { FaHome, FaBlog, FaSign } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className='px-4 bg-indigo-300   md:bg-black md:flex items-center justify-around'>
            <div className='flex justify-between md:justify-normal  gap-4 items-center'>
                <img className='w-[50px]' src={logo} alt="" />
                <h1 className='text-indigo-600 md:text-blue-50 font-bold text-xl'>The Thai Master</h1>
            </div>

            <div className='flex gap-3 items-center justify-center'>
                <div className='flex gap-1 items-center'>
                    <FaHome className='md:text-blue-50' /><NavLink to='/home' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold md:text-blue-50')}>Home</NavLink>
                </div>
                <div className='flex gap-1 items-center'>
                    <FaBlog className='md:text-blue-50' />
                    <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold md:text-blue-50')}>Blogs</NavLink>
                </div>

                <div className=''>{
                    user ?
                       
                        <img className='w-[50px]' src={logo} alt="" />
                        : <div className='flex gap-1 items-center'>
                            <FaSign className='md:text-blue-50' />
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold md:text-blue-50')}>Login</NavLink>
                        </div>
                }
                </div>
            </div>


        </nav>
    );
};

export default Header;