import React from "react";
import List from "./List";
import "./App.css";

const App = () => {
  const categories = ["shirts", "hats", "shoes"];

  return (
    <div>
      <List categories={categories} />;
    </div>
  );
};

export default App;
