import React, { Component } from "react";
import spaceshipimg from "./spaceship.png";

export default class Spaceship extends Component {
  constructor() {
    super();
    this.state = {
      left: 50,
      top: 400
    };
  }
  componentDidMount() {
    window.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowDown":
          return this.setState({ top: this.state.top + 10 });

        case "ArrowLeft":
          return this.setState({ left: this.state.left - 10 });

        case "ArrowUp":
          return this.setState({ top: this.state.top - 10 });

        case "ArrowRight":
          return this.setState({ left: this.state.left + 10 });

        default:
          return this.state;
      }
    });
  }
  render() {
    var style = {
      left: `${this.state.left}px`,
      top: `${this.state.top}px`
    };
    return (
      <div className="spaceship" style={style}>
        <img src={spaceshipimg} alt="spaceship" />
      </div>
    );
  }
}
