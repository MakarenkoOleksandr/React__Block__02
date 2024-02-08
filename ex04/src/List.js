import React from "react";
import Item from "./Item";

const List = ({ categories }) => {
  return (
    <ul>
      {categories.map((category, idx) => (
        <Item key={idx} category={category} />
      ))}
    </ul>
  );
};

export default List;
