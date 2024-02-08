import React, { Component } from "react";
import "./App.css";
import Name from "./Name";
import Surname from "./Surname";

class App extends Component {
  names = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
  surnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];

  render() {
    return (
      <div classname="App">
        {this.names.map((name, idx) => (
          <div key={idx}>
            <Name name={name} />
            <Surname surname={this.surnames[idx]} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
