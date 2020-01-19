import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (<div className="App" data-test="component-app">
    <h1 data-test="counter-display">Current Counter value: </h1>
    <button data-test="increment-button" />
    </div>);
  }
}

export default App;
