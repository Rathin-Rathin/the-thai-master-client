import React from 'react';
import banner from '../../../assets/banner-bg.jpg'
import chef from '../../../assets/chef.jpg';
import slider1 from '../../../assets/slaider1.jpg';
import slider2 from '../../../assets/slaider2.avif';
import slider3 from '../../../assets/slaider3.avif';
const Banner = () => {
    return (
        <div className="carousel w-full h-[70vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full h-6/12" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="text-white ">❮</a>
                    <div className='text-center mx-auto'>
                        <h1 className='mb-3 text-white text-4xl font-bold'>Smart chef every day</h1>
                        <p className='font-bold text-white'>10 recipes every week updates</p>
                        <button className='border rounded-lg text-white px-4 py-2 hover:bg-blue-300 '>ABOUT MORE</button>
                    </div>
                    
                    <a href="#slide2" className="text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-white">❮</a>
                    <div className='text-center mx-auto'>
                        <h1 className='mb-3 text-white text-4xl font-bold'>Smart chef every day</h1>
                        <p className='font-bold text-white'>10 recipes every week updates</p>
                        <button className='border hover:bg-blue-300  rounded-lg text-white px-4 py-2'>ABOUT MORE</button>
                    </div>
                    <a href="#slide3" className="text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-white">❮</a>
                    <div className='text-center mx-auto'>
                        <h1 className='mb-3 text-white text-4xl font-bold'>Smart chef every day</h1>
                        <p className='font-bold text-white'>10 recipes every week updates</p>
                        <button className='border hover:bg-blue-300  rounded-lg text-white px-4 py-2'>ABOUT MORE</button>
                    </div>
                    <a href="#slide4" className="text-white">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;