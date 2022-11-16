import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import useRecipes from "../hooks/useRecipes";
import useQuery from "../hooks/useQuery";

// export function useQuery() {
//   const [query, setQuery] = useState("banana");

//   useEffect(() => {
//     setQuery(query);
//     getRecipes();
//     console.log("query updated");
//   }, [query]);

//   return [query, setQuery];
// }

const Recipes = () => {
  //   const [recipes, setRecipes] = useRecipes();
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useQuery();
  //   const [query, setQuery] = useState("banana");

  useEffect(() => {
    getRecipes();
    console.log("new query in Recipes.js " + query);
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
    //-- Put the wanted data in a variable
    const data = await response.json();
    console.log("Recipes.js " + query);
    console.log(query);
    console.log(data.hits);
    console.log("Recipes.js " + query);
    setRecipes(data.hits);
    console.log("Recipes.js " + query);
  };

  const generateKey = (label) => {
    const output = `${label}_${new Date().getTime()}`;
    // console.log(output);
    return output;
  };

  return (
    <section>
      <div className="container-fluid recipes">
        {recipes.map((recipeHit, index) => (
          <Recipe
            key={generateKey(index + "_" + recipeHit.recipe.label)}
            title={recipeHit.recipe.label}
            calories={recipeHit.recipe.calories}
            image={recipeHit.recipe.image}
            ingredients={recipeHit.recipe.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
