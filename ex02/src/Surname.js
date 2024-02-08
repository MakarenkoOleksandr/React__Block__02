import React, { Component } from "react";

class Surname extends Component {
  render() {
    const { surname } = this.props;
    return <span>{surname}</span>;
  }
}

export default Surname;
