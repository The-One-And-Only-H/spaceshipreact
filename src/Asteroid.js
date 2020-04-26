import React, { Component } from 'react';
import asteroidimg from './asteroid.png';

// asteroid
const width = window.innerWidth;
const height = window.innerHeight;

export default class Asteroid extends Component {
  constructor(props) {
    super(props);

    this.speed = Math.random() * 30;

    this.state = {
      x: Math.random() * width,
      y: Math.random() * height,
    };
  }

  componentDidMount() {
    window.requestAnimationFrame(this.animate);
  }

  move = () => {
    var x = this.state.x + this.speed;
    if (x > width) {
      x = 0;
    }
    this.setState({ x });
  };

  animate = () => {
    this.move();
    window.requestAnimationFrame(this.animate);
  };

  render() {
    var style = {
      right: `${this.state.x}px`,
      top: `${this.state.y}px`,
    };
    // console.log('asteroid', 'right:', this.state.x, 'top:', this.state.y);

    return (
      <>
        <img className="asteroid" style={style} src={asteroidimg} alt="asteroid" />
      </>
    );
  }
}
