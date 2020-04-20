import React, { Component } from 'react';
import spaceshipimg from './spaceship.png';
import spaceshipAccelerationimg from './spaceshipAcceleration.png';
import spaceshipFireimg from './spaceshipFire.png';
import spaceshipFireAccelerationimg from './spaceshipFireAcceleration.png';

export default class Spaceship extends Component {
  constructor() {
    super();
    this.state = {
      left: 25,
      top: 250,
      acceleration: false,
      fire: false,
      accelerateAndFire: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
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
  }

  render() {
    const style = {
      left: `${this.state.left}px`,
      top: `${this.state.top}px`,
    };
    console.log('spaceship', 'left:', this.state.left, 'top:', this.state.top);

    return (
      <div className="spaceship" style={style}>
        {this.state.acceleration === true ? (
          <img src={spaceshipAccelerationimg} alt="spaceshipAcceleration" />
        ) : (
          <img src={spaceshipimg} alt="spaceship" />
        )}
      </div>
    );
  }
}
