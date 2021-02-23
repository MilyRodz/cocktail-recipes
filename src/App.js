import React, { Fragment } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import RecipesList from './components/RecipesList'


import ProviderCategories from  './context/ContextCategories';
import RecipesProvider from './context/ContextRecipe';


function App() {
  return (
    <ProviderCategories>
      <RecipesProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>

            <RecipesList />
        </div>
      </RecipesProvider>
    </ProviderCategories>
  );
}

export default App;
