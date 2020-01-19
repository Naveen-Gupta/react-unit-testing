import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    const { counter } = this.state;
    return (<div className="App" data-test="component-app">
    <h1 data-test="counter-display">Current Counter value: {counter}</h1>
    <button data-test="increment-button" onClick={()=> this.setState({counter: counter+1})}/>
    </div>);
  }
}

export default App;
