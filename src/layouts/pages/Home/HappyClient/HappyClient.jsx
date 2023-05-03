import React from 'react';
import { FaHeart,FaCity } from 'react-icons/fa';
const HappyClient = ({ client }) => {

    return (
        <div className='card shadow-2xl p-4'>
            <img className='mx-auto w-[150px] h-[150px] p-2 hover:bg-rose-300 border-4 border-blue-500 rounded-full ' src={client?.image} alt="" />
            <h1 className='text-lg text-center font-semibold my-3'>{client?.name}</h1>
            <small className='italic text-center my-2'>{client?.feedback}</small>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2 font-bold'><FaHeart className='text-rose-600'/>{client?.ratings}</p>
                <p className='flex items-center gap-2 font-bold'><FaCity className='text-yellow-400'/>{client?.city}</p>
            </div>
        </div>
    );
};

export default HappyClient;