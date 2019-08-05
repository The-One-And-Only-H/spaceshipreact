import React, { Component } from "react";
import "./App.css";
import Star from "./Star";
import Spaceship from "./Spaceship";
import Score from "./Score";
import Astronaut from "./Astronaut";

class App extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    var astronauts = [];
    for (var i = 0; i < 10; i++) {
      astronauts.push(<Astronaut key={i} />);
    }

    return (
      <div>
        {astronauts}
        {stars}
        <Spaceship />
        <Score />
      </div>
    );
  }
}

export default App;
