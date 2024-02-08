import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((cat, idx) => (
          <Item key={idx} category={cat} />
        ))}
      </ul>
    );
  }
}

export default List;
