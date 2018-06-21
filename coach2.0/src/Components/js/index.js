import React, { Component } from 'react';
import Roster from './roster'


class Box extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: 0
    }
  }
  showVal() {
    const val = this.inputVal.value
    this.setState({
      val: val
    })
  }
  render () {
    return (
      <div className={'box'} id={this.props.id}>
          <h3 className='title'>{this.props.title}</h3>
          {this.props.innerText}
      </div>
    )
  }
}

class Main extends Component {
  constructor (props) {
  	super(props)
    this.state = {

    }
  }
  render () {
    const players = <ul id='playersList'>
                      {this.props.players.map((player, index) => <li id={'player' + (index + 1)}>{player}</li>)}
                    </ul>
    const tactic =  <select name='tactics'>
                      <option value='4-4-2'>4-4-2</option>
                      <option value='5-3-2'>5-3-2</option>
                      <option value='3-5-2'>3-5-2</option>
                      <option value='4-5-1'>4-5-1</option>
                      <option value='5-4-1'>5-4-1</option>
                    </select>
    return (
      <div id='wrapper'>
        <div className='left'>
          <Box id='opponentDiv' title='OPPONENT: ' innerText={<input type='text' />} />
          <Box id='formationDiv' title='FORMATION:' innerText={tactic} />
          <Box id='fieldDiv' />
        </div>
        <div className='right'>
          <Box id='playersDiv' title='PLAYERS:' innerText={players} />
        </div>
      </div>
    )
  }
}

export default Main;
