import React, { useEffect, useState } from 'react';
import FooterBlogs from './FooterBlogs';
import { FaPaperPlane, FaFacebook, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://the-thai-master-server-rathin-rathin.vercel.app/food`)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className='mt-6  p-8 bg-gray-800 text-white'>
            <div className='md:flex justify-around'>
            <div className="md:w-3/12" >
                <h1 className='font-bold text-xl border-yellow-400 mb-4 pb-1 border-b-2'>POPULAR CATEGORY</h1>
                <p className="mb-6 border-b-2">Foods</p>
                <p className="mb-6 border-b-2">Beverages</p>
                <p className="mb-6 border-b-2">Deserts</p>
                <p className="mb-6 border-b-2">Appetizers</p>
            </div>
            <div className="md:w-3/12">
                <h1 className='font-bold text-xl border-yellow-400 mb-4 pb-1 border-b-2'>POPULAR POST FROM BLOGS</h1>
                {
                    blogs.map(blog => <FooterBlogs
                        key={blog.id}
                        blog={blog}
                    ></FooterBlogs>)
                }
            </div>
            <div className="md:w-3/12">
                <h1 className='font-bold text-xl border-yellow-400 mb-4 pb-1 border-b-2'>Contact with us</h1>
                <div>
                    <p className='mb-3'>123 Main Street</p>
                    <p className='mb-3'>Apt 2B</p>
                    <p className='mb-3'>Anytown, USA 12345</p>
                </div>
                <form className='flex'>
                    <p > <input type="email" className='p-2 text-blue-900 outline-none border-none' name="email" placeholder='Place your email' id="" /></p>
                    <p className=' flex items-center justify-center px-3 bg-yellow-600'><FaPaperPlane className='' /></p>
                </form>
                <div className='flex justify-between mt-6 text-2xl'>
                    <a className="border p-2 hover:bg-green-600 hover:text-white" href="#">
                        <FaGoogle />
                    </a>
                    <a className="border p-2 hover:bg-blue-800 hover:text-white" href="#">
                        <FaFacebook />
                    </a>

                    <a className="border p-2  hover:bg-green-700 hover:text-white" href="#">
                        <FaTwitter />
                    </a>
                    <a className="border p-2 hover:text-red-600 hover:bg-white" href="#">
                        <FaYoutube />
                    </a>
                </div>
            </div>
          </div>
            <p className='text-sm text-gray-500 text-center'>All right reserve @ 2023</p>
        </div>
    );
};

export default Footer;