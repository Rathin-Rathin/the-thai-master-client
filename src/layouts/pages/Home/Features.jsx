import React from 'react';
import bg from '../../../assets/featuresbanner.avif'
import {FaResearchgate, FaBreadSlice,FaMemory} from 'react-icons/fa';
const Features = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }}className='mt-9'>
            <h1 className='text-center font-semibold text-3xl pt-6  text-white' >OTHER FEATURES</h1>
            <p className='text-center  text-sm text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ut.</p>
            <div className='md:w-10/12 p-4 md:flex justify-between pb-4 gap-4 mt-4  mx-auto' >
                <div className='p-4 border-4 mb-4 border-slate-50 hover:border-blue-800'>
                    <FaBreadSlice className='text-white text-3xl mb-4 hover:text-blue-800'/>
                    <h3 className='text-white text-xl font-bold'>FOOD NUTRITIONS</h3>
                    <small className='text-white'>Nutrition is a crucial aspect of maintaining good health, and food is the primary source of the nutrients our bodies need. A balanced diet that includes a variety of foods is essential for providing us with the nutrients we need to stay healthy.</small>
               </div>
                <div className='p-4 border-4 mb-4 border-slate-50  hover:border-blue-800'>
                    <FaResearchgate className='text-white text-3xl mb-4 hover:text-blue-800'/>
                    <h3 className='text-white text-xl font-bold'>COOKING PERIOD</h3>
                    <small className='text-white'>Nutrition is a crucial aspect of maintaining good health, and food is the primary source of the nutrients our bodies need. A balanced diet that includes a variety of foods is essential for providing us with the nutrients we need to stay healthy.</small>
               </div>
                <div className='p-4 border-4 mb-4 border-slate-50  hover:border-blue-800'>
                    <FaMemory className='text-white text-3xl mb-4 hover:text-blue-800'/>
                    <h3 className='text-white text-xl font-bold'>MEMBERSHIP</h3>
                    <small className='text-white'>Nutrition is a crucial aspect of maintaining good health, and food is the primary source of the nutrients our bodies need. A balanced diet that includes a variety of foods is essential for providing us with the nutrients we need to stay healthy.</small>
               </div>

            </div>
        </div>
    );
};

export default Features;