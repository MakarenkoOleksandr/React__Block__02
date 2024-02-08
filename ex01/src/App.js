import { Component } from "react";
import "./App.css";
import Child from "./Child";

class App extends Component {
  name = "Alex";
  render() {
    return <Child name={this.name} />;
  }
}

export default App;
