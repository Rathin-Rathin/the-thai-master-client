import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowRecipe = ({ recipe }) => {
    const notify = () => toast("Added to Favorite");
    return (
        <div className="mt-12 card bg-base-100 shadow-xl ">
            
            <figure>
                <img className='rounded-full w-9/12 mx-auto' src={recipe?.img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe?.recipesName}</h2>
                <p>{recipe?.shortDescription}</p>
                <p className='text-blue-600 font-semibold'>Ingredients Blow</p>
                {
                    recipe?.ingredients.map(ing => <li>{ing}</li>)
                }
                <p className='flex items-center justify-start gap-1'><FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500'/>{recipe?.ratings}</p>
                <div className="card-actions justify-center">
                    <button onClick={notify} className="w-full text-blue-600 font-bold text-center border border-blue-600 rounded-3xl px-3 shadow-md hover:bg-blue-400 hover:text-white hover:border-none">Add Favorite</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ShowRecipe;