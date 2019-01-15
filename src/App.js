import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stars from './Stars';

class App extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < 50; i++) {
      stars.push(<Stars />);
    }
    return <div>{stars}</div>;
  }
}

export default App;
