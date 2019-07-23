import React from "react";
import Cards from "./cards/Cards";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    isCardShown: false
  };
  handleClick = () => {
    const {isCardShown} = this.state;
    this.setState({ isCardShown: !isCardShown });
  };
  render() {
    return (
      <div className="App">
        {this.state.isCardShown ? <Cards /> : null}
        <h1>Hello Yuval</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
