import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// create context

export const ContextCategories = createContext();

// Provider is where you find functions and state
const ProviderCategories = (props) => {
    
    // create the context state
    const [ categories, saveCategories ] = useState([]);

    // Make API call
    useEffect(() =>{
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);

            saveCategories(categories.data.drinks);
        }
        getCategories();
    }, []);



    return (
        <ContextCategories.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </ContextCategories.Provider>
    )
}
 
export default ProviderCategories;