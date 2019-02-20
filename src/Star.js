import React, { Component } from "react";

// stars
const width = window.innerWidth;
const height = window.innerHeight;

export default class Star extends Component {
  constructor(props) {
    super(props);

    this.speed = Math.random() * 5;
    this.state = {
      x: Math.random() * width,
      y: Math.random() * height
    };

    // this.move = this.move.bind(this);
    // this.animate = this.animate.bind(this);
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

  animate() {
    this.move()
    window.requestAnimationFrame(() => this.animate());
  }
}
