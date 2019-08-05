import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import NBLogo from './NBLogo.svg';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {/* <ReactSVG className="Logo" src={NBLogo.svg} alt="Neverbland" /> */}
        <ReactSVG
          src="NBLogo.svg"
          className="Logo"
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(svg);
          }}
          beforeInjection={(svg) => {
            svg.classList.add('svg-class-name');
            svg.setAttribute('style', 'width: 200px');
          }}
          evalScripts="always"
          fallback={() => <span>Error!</span>}
          loading={() => <span>Loading</span>}
          renumerateIRIElements={false}
          wrapper="span"
          className="wrapper-class-name"
          onClick={() => {
            console.log('wrapper onClick');
          }}
        />
      </>
    );
  }
}
