import { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  categories = ["shirts", "hats", "shoes"];

  render() {
    return (
      <div>
        <List categories={this.categories} />
      </div>
    );
  }
}

export default App;
