import React, { useContext } from 'react';
import Recipe from './Recipe';
import { ContextRecipe } from '../context/ContextRecipe' 

const RecipesList = () => {

  // extract the recipes
  const { recipes } = useContext(ContextRecipe);


  return ( 
    <div className="row mt-5">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.idDrink}
          recipe={recipe}
        />
      ))}
    </div> );
}
 
export default RecipesList;