import React, { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import useRecipes from "../hooks/useRecipes";

const Title = () => {
  const [search, setSearch] = useState("");
  //   const [recipes, setRecipes] = useRecipes();
  const [query, setQuery] = useQuery("name", "banana");
  //   const [query, setQuery] = useState("banana");

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

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  return (
    <section>
      <div className="container-fluid title">
        <div className="titleHeadings">
          <h1 className="titleH1">Welcome to Desired Recipes!</h1>
          <h2 className="titleH2">
            Where you can find nice recipes about whatever you want!!!
          </h2>
        </div>

        <form className="search-form" onSubmit={getSearch}>
          <div className="input-group input-group-lg mb-3">
            <input
              className="form-control"
              type="text"
              value={search}
              placeholder="e.g. banana, chicken, and cake"
              onChange={updateSearch}
            />
            <div className="input-group-append input-group-lg">
              <button className="btn btn-danger" type="submit" id="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Title;
