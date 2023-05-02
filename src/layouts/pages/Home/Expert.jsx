import React from 'react';
import { FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Expert = ({ expert }) => {
    const { chefImg, chefName, experiences,chefLike,id,recipes} = expert;
    return (
        <div className="card  bg-base-100 shadow-2xl">
            <figure>
                <img className='rounded-xl hover:translate-y-5 transition-transform w-full h-[40vh]' src={chefImg} alt="loading" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <p>{experiences}</p>
                <p className='font-bold'>Recipes :{recipes.length}</p>
                <p>
                    
                    <span className='flex items-center gap-3'><span className='text-red-700'>< FaHeart/></span>{chefLike}</span>
                </p>
                <div className="card-actions  justify-center">
                    <Link to={`/details/${id}`} className="w-full text-center border border-blue-600 rounded-3xl px-3 shadow-md hover:bg-blue-400 hover:text-white hover:border-none">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default Expert;