import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
// import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

const App = () => {
  const APP_ID = "9a6a3a21";
  const APP_KEY = "dc5f611bbc2a2cb043043b4c8ed60d01";
  // const exmapleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // A way to create an state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  //-- So, adding a second argument to useEffect, like an empty array [], the first request is run only ONCE. (fetching data ONCE).
  //-- Putting [counter] as the "second argument", run the first argument (the function), every time the counter changes.
  //-- To check it again, put this h1 inside div but outside form:
  // <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
  //-- AND
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   console.log("Effect has been run");
  // }, []);

  // -- useEffect()
  useEffect(() => {
    getRecipes();
  }, [query]);

  //-- Call for the data (fetch)
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //-- Put the wanted data in a variable
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const generateKey = (label) => {
    const output = `${label}_${new Date().getTime()}`;
    // console.log(output);
    return output;
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipeHit, index) => (
          <Recipe
            key={generateKey(index + recipeHit.recipe.label)}
            title={recipeHit.recipe.label}
            calories={recipeHit.recipe.calories}
            image={recipeHit.recipe.image}
            ingredients={recipeHit.recipe.ingredients}
            keyGenerator={generateKey}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
