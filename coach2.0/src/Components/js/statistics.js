import React, { Component } from 'react';

class Statistics extends Component {
  render () {
    return (
      <div id='landingBackground'>
        <div id='landingPage'>
          <h1 id='landingText'>Hi Joachim!</h1>
          <h3>Willkommen in der Mannschaft!</h3>
          <button id='landingBtn' onClick={this.props.handleWelcome}>Enter Coach 2.0</button>
        </div>
      </div>
    )
  }
}

export default Statistics
