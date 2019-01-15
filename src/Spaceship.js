import React, { Component } from 'react';
import spaceshipimg from './spaceship.png';

export default class Spaceship extends Component {
  constructor() {
    super()
    this.state = {
      left: 50,
      top: 400
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.key == "ArrowDown") {
        var top = this.state.top + 5;
        this.setState({top});
      }
      if (e.key == "ArrowLeft") {
        var left = this.state.left - 5;
        this.setState({left});
      }
      if (e.key == "ArrowUp") {
        var top = this.state.top - 5;
        this.setState({top});
      }
      if (e.key == "ArrowRight") {
        var left = this.state.left + 5;
        this.setState({left});
      }
    })
  }
  render() {
    var style = {
      left: `${this.state.left}px`,
      top: `${this.state.top}px`
    }
    return <div className='spaceship' style={style}><img src={spaceshipimg} /></div>;
  }
}
