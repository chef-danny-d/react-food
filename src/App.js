import React, {useEffect, useState} from 'react';
import './App.sass';
import Recipe from './components/Recipe'
import Modal from './components/Modal'
import uuid from 'uuid'

function App() {
    const API_ID = '5a35bffa'
    const API_KEY = 'ca20fcdadad964924a79fb451400720b'

    //states
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getData()
    },[query])

    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=12}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        //running on submit
        e.preventDefault()
        setQuery(search)
    }

  return (
      <div className="container">
          <div className="flex-column">
              <form className="search" onSubmit={getSearch}>
                  <input className="search--input" value={search} onChange={updateSearch} type="text" placeholder="Enter ingredient, recipe, or keyword"/>
                  <button className="btn btn-primary search--button" type="submit">Search</button>
              </form>
              <div className="wrapper">
                  {recipes.map(recipes => (
                      <Recipe
                          title={recipes.recipe.label}
                          calories={Math.trunc(recipes.recipe.calories)}
                          image={recipes.recipe.image}
                          key={uuid()}
                      />
                  ))}
                  <Modal />
              </div>
          </div> {/*end of flex column*/}
      </div> /*end of main wrapper*/
  );
}

export default App;
