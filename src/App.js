import React, { useEffect, useState } from "react";
// import Recipe from "./components/Recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// require("dotenv/config");

// import Title from "./components/Title";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

const App = () => {
  // A way to create an state
  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("banana");
  // const [recipes, setRecipes] = useRecipes();
  // const [query, setQuery] = useQuery();

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
  // useEffect(() => {
  //   getRecipes();
  // }, [query]);

  //-- Call for the data (fetch)
  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
  //   );
  //   //-- Put the wanted data in a variable
  //   const data = await response.json();
  //   console.log(data.hits);
  //   setRecipes(data.hits);
  // };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  //   // console.log(search);
  // };

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  // const generateKey = (label) => {
  //   const output = `${label}_${new Date().getTime()}`;
  //   // console.log(output);
  //   return output;
  // };

  // return (
  //   <div className="App">
  //     <div className="title">
  //       <div className="titleHeadings">
  //         <h1 className="titleH1">Welcome to Desired Recipes!</h1>
  //         <h2 className="titleH2">
  //           Where you can find nice recipes about whatever you want!!!
  //         </h2>
  //       </div>
  //       <form className="search-form" onSubmit={getSearch}>
  //         <input
  //           className="search-bar"
  //           type="text"
  //           value={search}
  //           onChange={updateSearch}
  //           placeholder="e.g. banana, chicken, and cake"
  //         />
  //         <button className="search-button" type="submit">
  //           Search
  //         </button>
  //       </form>
  //       <div></div>
  //     </div>
  //     <div className="recipes">
  //       {recipes.map((recipeHit, index) => (
  //         <Recipe
  //           key={generateKey(index + recipeHit.recipe.label)}
  //           title={recipeHit.recipe.label}
  //           calories={recipeHit.recipe.calories}
  //           image={recipeHit.recipe.image}
  //           ingredients={recipeHit.recipe.ingredients}
  //           keyGenerator={generateKey}
  //         />
  //       ))}
  //     </div>
  //     <div className="footer">
  //       <p>© Copyright 2022 EliezerCoding</p>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <Title />
  //     <Recipes />
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="App">
      {/* <Title /> */}
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
