import React from 'react';
import { FaComment,FaEye} from 'react-icons/fa';
const FooterBlogs = ({blog}) => {
    return (
        <div>
            <h1 className='font-semibold mb-2'> <a href="#">
            {blog?.foodTitle}</a></h1>
            <div className='flex justify-between mb-4 border-b-2 pb-1'>
                <p className='flex items-center gap-1 text-sm'>
                    <FaEye className='text-yellow-400'/>
                    {blog?.views} views</p>
                <p className='flex items-center gap-1 text-sm'>
                    <FaComment className='text-yellow-400'/>
                    {blog?.comments} comments</p>
            </div>
        </div>
    );
};

export default FooterBlogs;