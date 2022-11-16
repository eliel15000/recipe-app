import { useState, useEffect } from "react";

const useQuery = () => {
  const [query, setQuery] = useState("banana");

  useEffect(() => {
    setQuery(query);
    console.log(query);
  }, [query]);

  //   useEffect(() => {
  //     getRecipes();
  //   }, [query]);

  //   const getRecipes = async () => {
  //     const response = await fetch(
  //       `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
  //     );
  //     //-- Put the wanted data in a variable
  //     const data = await response.json();
  //     console.log(query);
  //     console.log(data.hits);
  //     setRecipes(data.hits);
  //   };

  return [query, setQuery];
};

export default useQuery;
