import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart} from 'react-icons/fa';
import ShowRecipe from './ShowRecipe';
const Details = () => {
    const chefDetails = useLoaderData();
    const { chefImg, chefName, experiences, chefLike, id, recipes } = chefDetails;
    return (
        <div>
            <div className='mt-6 md:w-9/12 mx-auto flex justify-between items-center'>
                <div className='w-5/12 p-4 card  bg-base-100 shadow-xl  border rounded-md'>
                <img className='animate-pulse rounded-2xl shadow-xl' src={chefImg} alt="" />
                </div>
                <div className='card  bg-base-100 shadow-xl p-4 rounded-md'>
                    <h1 className='text-2xl font-bold'>Name:{chefName}</h1>
                    <p className='text-xl font-bold mt-2'>Experiences: <span className=' text-indigo-700'>{experiences}</span></p>
                    <p className='flex  items-center gap-2 text-xl mt-2 font-bold'>
                        
                        Like:<span className='text-indigo-700'>{chefLike}</span><FaHeart className='text-red-600'/></p>
                    <p className='text-xl mt-2 font-bold'>Total recipes:<span className=' text-indigo-700'>{recipes.length}</span> </p>
                </div>
            </div>
            {
                recipes.map(recipe => <ShowRecipe
                    key={recipe.recipesId}
                    recipe={recipe}
                ></ShowRecipe>)
            }
        </div>
    );
};

export default Details;