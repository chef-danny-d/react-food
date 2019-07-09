import React, {useEffect, Fragment, useState} from 'react';
import './App.sass';
import Recipe from './components/Recipe'
import Button from '@material-ui/core/Button';

function App() {
    const API_ID = 'd3002bb8'
    const API_KEY = 'ecd31d0d6c5149c875fc6d98d39ce093'

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data)
    }

  return (
      <div className="container">
          <div className="flex-column">
              <form className="form-group">
                  <input className="input-group" type="text"/>
                  <button className="btn btn-primary" type="submit">Search</button>
              </form>
              <div className="card-columns">
                  {recipes.map(recipes => (
                      <Recipe
                          title={recipes.recipe.label}
                          calories={Math.round(recipes.recipe.calories)}
                          image={recipes.recipe.image}
                          key={recipes.recipe.id}
                      />
                  ))}
              </div>
          </div> {/*end of flex column*/}
      </div> /*end of main wrapper*/
  );
}

export default App;
