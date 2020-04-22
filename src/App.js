import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Star from './Star';
import Score from './Score';

// Spaceship images
import spaceshipimg from './spaceship.png';
import spaceshipAccelerationimg from './spaceshipAcceleration.png';
import spaceshipFireimg from './spaceshipFire.png';
import spaceshipFireAccelerationimg from './spaceshipFireAcceleration.png';

// Astronaut image
import astronautimg from './astronaut.png';

// To do
// - increment the timer only when the player has interacted with specific items in the game
// - decrement the timer when the players has interacted with other items in the game
// - create an intro and outright sequence
// - detect the right key for when the player fires and subsequently the result of what happens when that interacts with an item

// Next steps
// - You should put the ship, the astronauts, and the score in the state of the App component
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     const astronauts = [];
//     for (var i = 0; i < 5; i++) {
//       astronauts.push(<Astronaut key={i} />);
//     }
//     this.state = {
//       ship: (<Spaceship />),
//       score: (<Score />),
//       astronauts: astronauts
//     };
//   }
//
// OR
//
// render() {
//   const stars = [];
//   for (var i = 0; i < 50; i++) {
//     stars.push(<Star key={i} />);
//   }
//   return (
//     <div>
//       <LandingPage />
//       {this.astronauts}
//       {stars}
//       {this.spaceship}
//       {this.score}
//     </div>
//   );
// }
//
// - See rest of notes in chat

// Astronaut window detection
const width = window.innerWidth;
const height = window.innerHeight;

class App extends Component {
  constructor(props) {
    super(props);

    this.speed = Math.random() * 8;

    this.state = {
      // Spaceship state
      left: 25,
      top: 250,
      acceleration: false,
      fire: false,
      accelerateAndFire: false,

      // Astronaut state
      x: Math.random() * width,
      y: Math.random() * height,
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
        astroRect.x > shipRect.left &&
        astroRect.x < shipRect.right &&
        astroRect.y > shipRect.top &&
        astroRect.y < shipRect.bottom
      ) {
        console.log('hit');
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.detectCollision();
    }, 2000);

    // Spaceship controls
    window.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowDown':
          return this.setState({ top: this.state.top + 10, acceleration: true });

        case 'ArrowLeft':
          return this.setState({ left: this.state.left - 10, acceleration: true });

        case 'ArrowUp':
          return this.setState({ top: this.state.top - 10, acceleration: true });

        case 'ArrowRight':
          return this.setState({ left: this.state.left + 10, acceleration: true });

        default:
          return this.state;
      }
    });

    // Astronaut animation
    window.requestAnimationFrame(this.animate);
  }

  // Astronaut horizontol movement
  move = () => {
    var x = this.state.x + this.speed;
    if (x > width) {
      x = 0;
    }
    this.setState({ x });
  };

  // Astronaut animation
  animate = () => {
    this.move();
    window.requestAnimationFrame(this.animate);
  };

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(<Star key={i} />);
    }

    // Spaceship style
    const spaceshipStyle = {
      left: `${this.state.left}px`,
      top: `${this.state.top}px`,
    };

    // Astronaut style
    var astronautStyle = {
      right: `${this.state.x}px`,
      top: `${this.state.y}px`,
    };

    const astronauts = [];
    for (let z = 0; z < 5; z++) {
      astronauts.push(
        <img
          className="astronaut"
          style={astronautStyle}
          src={astronautimg}
          alt="astronaut"
          key={z}
        />,
      );
    }

    return (
      <div>
        <LandingPage />
        <div>{astronauts}</div>
        {stars}
        <div className="spaceship" style={spaceshipStyle}>
          {this.state.acceleration === true ? (
            <img src={spaceshipAccelerationimg} alt="spaceshipAcceleration" />
          ) : (
            <img src={spaceshipimg} alt="spaceship" />
          )}
        </div>
        <Score />
      </div>
    );
  }
}

export default App;
