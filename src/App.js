import React, { Component } from "react";
import "./App.css";
import Star from "./Star";
import Spaceship from "./Spaceship";
import Score from "./Score";

class App extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }
    return (
      <div>
        {stars}
        <Spaceship />
        <Score />
      </div>
    );
  }
}

export default App;
