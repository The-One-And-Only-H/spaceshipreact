import React, { Component } from "react";

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  increaseScore() {
    this.setState(state => ({ score: state.score + 1 }));
  }

  render() {
    return <div className="score">{this.state.score}</div>;
  }

  componentDidMount() {
    setInterval(() => {
      this.increaseScore();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.state.score);
  }
}
