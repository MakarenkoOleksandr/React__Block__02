import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name } = this.props;
    return <span>{name}</span>;
  }
}

export default Name;
