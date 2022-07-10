import React from "react";
import { Route, Routes } from "react-router-dom";
import EachDay from "./EachDay";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date/:day" element={<EachDay />} />
      </Routes>
    </>
  );
};

export default App;
