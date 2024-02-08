import { Component } from "react";

class Child extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Hello {name}, I am the child component!</p>
      </div>
    );
  }
}

export default Child;
