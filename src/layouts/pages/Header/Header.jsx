import React, { useContext } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/thai_logo1.png'
import { FaHome, FaBlog, FaSign } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const userName = user?.displayName;
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(result => {
                navigate('/login');
            })
            .catch(error => console.log(error.message))

    }
    return (
        <nav className='px-4 bg-indigo-300 border-b-2  md:bg-black md:flex items-center justify-around'>
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


                <div className='show-name'>
                    {
                        user ?

                            <div>
                                <p className='text-xl font-bold hidden user-name z-10 '>${userName}</p>

                                <img className='relative z-0 w-[50px] rounded-full'
                                    src={user?.photoURL} alt='' />
                                
                            </div>

                            : <div className='flex gap-1 items-center'>
                                <FaSign className='md:text-blue-50' />
                                <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-600 font-bold' : 'font-semibold md:text-blue-50')}>Login</NavLink>
                            </div>
                    }
                </div>
                {user &&
                    <div className='flex gap-1 items-center'>

                    <NavLink onClick={handleLogout} className="text-white font-bold">
                        Log out
                    </NavLink>
                </div>}
            </div>


        </nav>
    );
};

export default Header;