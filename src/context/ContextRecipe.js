import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContextRecipes = createContext();

const RecipesProvider = (props) => {
    
    const [recipes, saveRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    });

    const [ consult, saveConsult ] = useState(false);
    
    const { name, category } = search;

    useEffect(() => {
        if(consult) {
          const getRecipe = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

            const result = await axios.get(url);

            // console.log(result.data.drinks);
            
            saveRecipes(result.data.drinks);
          }
    
          getRecipe();
        }
          
      }, [search]);

    return (
        <ContextRecipes.Provider
            value={{
                recipes,
                searchRecipes, 
                saveConsult
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    );
}

export default RecipesProvider;