import React from "react";
import { Route } from "react-router-dom";
import EachDay from "./EachDay";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/date/:day" exact>
        <EachDay />
      </Route>
    </>
  );
};

export default App;
