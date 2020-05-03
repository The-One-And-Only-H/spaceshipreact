import React, { Component } from 'react';

export default class GameOver extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="Text" aria-label="Game over">
          Game over
        </div>
      </>
    );
  }
}
