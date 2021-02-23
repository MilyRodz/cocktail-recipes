import React, { useContext } from 'react';
import {ContextRecipe, ContextRecipes} from '../context/ContextRecipe' 

const RecipesList = () => {

  // extract the recipes
  const { recipes } = useContext(ContextRecipes);

  console.log(recipes);

  return ( 
    <div className="row mt-5">
      {recipes.map(recipe => (
        
      ))}
    </div> );
}
 
export default RecipesList;