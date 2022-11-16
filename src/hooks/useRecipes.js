import { useEffect, useState } from "react";

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipes);
    console.log("useRecipes.js " + recipes);
  }, [recipes]);

  return [recipes, setRecipes];
};

export default useRecipes;
