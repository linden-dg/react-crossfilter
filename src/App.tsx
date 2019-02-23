import React, { Component } from "react";
import FacetView from "./ui/components/FacetsView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <FacetView />
        </div>
      </div>
    );
  }
}

export default App;
