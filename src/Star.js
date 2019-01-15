import React, { Component } from 'react';

// stars
let width = window.innerWidth;
let height = window.innerHeight
let particles = [];

export default class Star extends Component {
  constructor() {
    super()
    this.speed = Math.random() * 5;
    this.state = {
      x: Math.random() * width,
      y: Math.random() * height
    }
  }

componentDidMount() {
  window.requestAnimationFrame(() => this.animate());
}

  render() {
    var style = {
      right: `${this.state.x}px`,
      top: `${this.state.y}px`
    };
    return <div className='particle' style={style}></div>;
  }
  move() {
    var x = this.state.x + this.speed;
    if (x > width) {
      x = 0;
    }
    this.setState({x})
  }

  animate() {
    this.move()
    window.requestAnimationFrame(() => this.animate());
  }
}
