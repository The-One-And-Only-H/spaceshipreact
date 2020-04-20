import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Star from './Star';
import Spaceship from './Spaceship';
import Score from './Score';
import Astronaut from './Astronaut';

// To do
// - increment the score only when the player has interacted with specific items in the game
// - decrement the score when the players has interacted with other items in the game
// - create an intro and outright sequence
// - detect the right key for when the player fires and subsequently the result of what happens when that interacts with an item

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

    // if x>left && x<right && y<top && y>bottom

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
