import React, { useState } from "react";

const Title = ({ parentCallback }) => {
  const [search, setSearch] = useState("");

  const getSearch = (e) => {
    e.preventDefault();
    parentCallback(search);
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
              required
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
