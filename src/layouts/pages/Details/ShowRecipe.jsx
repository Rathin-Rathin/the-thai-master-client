import React from 'react';

const ShowRecipe = ({ recipe }) => {
    console.log(recipe);
    return (
        <div>
            <h1>All recipe is here name:{recipe ?.recipesName}</h1>
        </div>
    );
};

export default ShowRecipe;