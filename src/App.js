import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
