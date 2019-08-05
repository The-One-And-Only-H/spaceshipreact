import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Star from './Star';
import Spaceship from './Spaceship';
import Score from './Score';
import Astronaut from './Astronaut';

class App extends Component {
  render() {
    const stars = [];
    for (var i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    const astronauts = [];
    for (var i = 0; i < 5; i++) {
      astronauts.push(<Astronaut key={i} />);
    }

    return (
      <div>
        <LandingPage />
        {astronauts}
        {stars}
        <Spaceship />
        <Score />
      </div>
    );
  }
}

export default App;
