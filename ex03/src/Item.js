import React, { Component } from "react";

class Item extends Component {
  render() {
    const { category } = this.props;
    return <li>{category}</li>;
  }
}
export default Item;
