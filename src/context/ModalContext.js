import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ProviderModal = (props) => {

  //provider state
  const [ idrecipe, saveIdRecipe ] = useState(null);
  const [information, saveRecipe] = useState({});

  // once we have a recipe, call API
  useEffect( () => {
    const getRecipe = async () => {
        if(!idrecipe) return;

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

        const result = await axios.get(url);

        saveRecipe(result.data.drinks[0]);
    }
    getRecipe();
  }, [idrecipe]);


  return (
    <ModalContext.Provider
      value={{
        information,
        saveIdRecipe,
        saveRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ProviderModal;