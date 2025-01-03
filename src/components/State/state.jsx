import React, { Component } from "react";
import "./style.css";

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleincrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handledecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.handleincrement}>+</button>
        <button onClick={this.handledecrement} disabled={count==0 ? true : false}>-</button>
      </div>
    );
  }
}

export default State;
