import React, { Component } from "react";
import "./App.css";
import Star from "./Star";
import Spaceship from "./Spaceship";

class App extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < 50; i++) {
      stars.push(<Star />);
    }
    return <div>{stars}<Spaceship /></div>;
  }
}

export default App;
