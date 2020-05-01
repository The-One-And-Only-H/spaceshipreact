import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Astronaut from './Astronaut';
import Asteroid from './Asteroid';
import Star from './Star';
import Spaceship from './Spaceship';
// import Score from './Score';

// TO DO:
// - decrement the score when the players has interacted with other items in the game
// - adjust asteroids to render at different y axis each time
// - create an intro and outright sequence
// - detect the right key for when the player fires and subsequently the result of what happens when that interacts with an item

class App extends Component {
  constructor(props) {
    super(props);

    const astronauts = [];
    for (let z = 0; z < 5; z++) {
      astronauts.push(<Astronaut key={z} />);
    }

    const asteroids = [];
    for (let z = 0; z < 3; z++) {
      asteroids.push(<Asteroid key={z} />);
    }

    this.state = {
      astronauts,
      asteroids,
      score: 0,
      display: 'block',
    };

    this.detectAstronaut = this.detectAstronaut.bind(this);
    this.detectAsteroid = this.detectAsteroid.bind(this);
  }

  detectAstronaut() {
    const ship = document.getElementsByClassName('spaceship');
    if (ship.length === 0) {
    }
    const shipRect = ship[0].getBoundingClientRect();
    // console.log('ship:', shipRect);

    const astro = document.getElementsByClassName('astronaut');
    for (let y = 0; y < astro.length; y++) {
      const astroRect = astro[y].getBoundingClientRect();
      // console.log('astro:', astroRect);
      if (
        astroRect.x > shipRect.left
        && astroRect.x < shipRect.right
        && astroRect.y > shipRect.top
        && astroRect.y < shipRect.bottom
      ) {
        this.state.astronauts.splice(y, 1);
        this.setState(state => ({
          score: state.score + 1,
        }));
        // console.log('Astronaut rescued!');
        // console.log('Astronauts remaining:', this.state.astronauts);
      }
    }
  }

  detectAsteroid() {
    const ship = document.getElementsByClassName('spaceship');
    if (ship.length === 0) {
    }
    const shipRect = ship[0].getBoundingClientRect();
    // console.log('ship:', shipRect);

    const aster = document.getElementsByClassName('asteroid');
    for (let y = 0; y < aster.length; y++) {
      const asterRect = aster[y].getBoundingClientRect();
      // console.log('aster:', asterRect);
      if (
        asterRect.x > shipRect.left
        && asterRect.x < shipRect.right
        && asterRect.y > shipRect.top
        && asterRect.y < shipRect.bottom
      ) {
        this.setState({
          display: 'none',
        });
        console.log('Critical hit!');
      }
    }
  }

  // TO FIX: increments multiple times on one astronaut
  componentDidMount() {
    setInterval(() => {
      this.detectAstronaut();
      this.detectAsteroid();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.state.score);
  }

  render() {
    // console.log(this.state.display);

    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    return (
      <div>
        <LandingPage />
        <div detectAstronaut={this.detectAstronaut}>{this.state.astronauts}</div>
        {this.state.asteroids}
        {stars}
        <div detectAsteroid={this.detectAsteroid} style={{ display: `${this.state.display}` }}>
          <Spaceship />
        </div>
        <div className="score">{this.state.score}</div>
      </div>
    );
  }
}

export default App;
