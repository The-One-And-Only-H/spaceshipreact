import React, { Component } from 'react';
import astronautimg from './astronaut.png';

// astronaut
const width = window.innerWidth;
const height = window.innerHeight;

export default class Astronaut extends Component {
  constructor(props) {
    super(props);

    this.speed = Math.random() * 8;

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
    console.log('astronaut', 'right:', this.state.x, 'top:', this.state.y);

    return (
      <>
        <img className="astronaut" style={style} src={astronautimg} alt="astronaut" />
      </>
    );
  }
}
