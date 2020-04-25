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
  constructor(props) {
    super(props);

    const astronauts = [];
    for (let z = 0; z < 5; z++) {
      astronauts.push(<Astronaut key={z} />);
    }

    this.state = {
      astronauts,
    };
  }

  detectCollision() {
    const ship = document.getElementsByClassName('spaceship');
    if (ship.length === 0) {
    }
    const shipRect = ship[0].getBoundingClientRect();
    // console.log('ship:', shipRect);

    const astro = document.getElementsByClassName('astronaut');
    for (let y = 0; y < 5; y++) {
      const astroRect = astro[y].getBoundingClientRect();
      // console.log('astro:', astroRect);
      if (
        astroRect.x > shipRect.left
        && astroRect.x < shipRect.right
        && astroRect.y > shipRect.top
        && astroRect.y < shipRect.bottom
      ) {
        // return <Astronaut style="display: none" />;
        console.log('hit');
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.detectCollision();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    return (
      <div>
        <LandingPage />
        {this.state.astronauts}
        {stars}
        <Spaceship className="spaceship" />
        <Score />
      </div>
    );
  }
}

export default App;
