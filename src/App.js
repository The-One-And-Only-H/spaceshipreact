import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Star from './Star';
import Spaceship from './Spaceship';
import Score from './Score';
import Astronaut from './Astronaut';

// if x>left && x<right && y<top && y>bottom

// 1) a periodic timer
// 2) getting the extremes of the ship box
// 3) getting the position of one or of all the astronauts
// 4) doing something if you detect a hit

class App extends Component {
  render() {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    const astronauts = [];
    for (let z = 0; z < 5; z++) {
      astronauts.push(<Astronaut key={z} />);
    }

    // const bodyRect = document.Spaceship.getBoundingClientRect();

    // const elemRect = Astronaut.getBoundingClientRect();

    // const offset = elemRect.top - bodyRect.top;

    // console.log(`Element is ${offset} vertical pixels from <body>`);

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
