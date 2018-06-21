import React, { Component } from 'react';

// class Player extends React.Component {
//
//   render () {
//     return (
//
//     )
//   }
// }
//
class Roster extends Component {
  render () {
    return (
      <div>
        {this.props.innerText}
        <ul>
          {this.props.players.map((player, index) => <li key={index} id={'player' + (index + 1)}>{player}<button onClick={this.props.handleDelete} playername={player}>Delete</button></li>)}
        </ul>
      </div>
    )
  }
}

export default Roster
