import React, { Fragment } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import RecipesList from './components/RecipesList'


import ProviderCategories from  './context/ContextCategories';
import ProviderRecipes from './context/ContextRecipe';
import ProviderModal from './context/ModalContext'


function App() {
  return (
    <ProviderCategories>
      <ProviderRecipes>
        <ProviderModal>
          <Header />

            <div className="container mt-5">
              <div className="row">
                <Form />
              </div>

                <RecipesList />
            </div>
        </ProviderModal>
      </ProviderRecipes>
    </ProviderCategories>
  );
}

export default App;
