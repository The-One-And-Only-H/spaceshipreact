import React, { Component } from 'react';
import { ReactComponent as NBLogo } from './NBLogo.svg';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <NBLogo className="Logo" aria-label="Logo" />
      </>
    );
  }
}
