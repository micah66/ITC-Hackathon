import React, { Component } from 'react';

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
          <h3 className='title'>{this.props.team_score}</h3>
      </div>
    )
  }
}

class Main extends Component {
  render () {
    const players = <ul id='playersList'>
                      {this.props.players.map((player, index) => <li key={index} id={'player' + (index + 1)}>{player}</li>)}
                    </ul>

    const sections =  <div id='sections'>
                        <section className='field-section' id='forwards'>
                          {this.props.attacker.map((player, index) => <div key={index} className='player'>
                            <div className='dot goalkeeper'></div>
                            <div>{player}</div>
                          </div>)}
                        </section>
                        <section className='field-section' id='midfielders'>
                          {this.props.midfield.map((player, index) => <div key={index} className='player'>
                          <div className='dot goalkeeper'></div>
                          <div>{player}</div>
                          </div>)}
                        </section>
                        <section className='field-section' id='defense'>
                          {this.props.defender.map((player, index) => <div key={index} className='player'>
                          <div className='dot goalkeeper'></div>
                          <div>{player}</div>
                          </div>)}
                        </section>
                        <section className='field-section' id='goalkeeper'>
                          {this.props.goal.map((player, index) => <div key={index} className='player'>
                            <div className='dot goalkeeper'></div>
                            <div>{player}</div>
                          </div>)}
                        </section>
                      </div>
    return (
      <div id='wrapper'>
        <div className='left'>
          <Box id='opponentDiv' title='GERMAN WC 2018' />
          <Box id='formationDiv' title='FORMATION:' innerText={this.props.tactic} team_score={'TEAM SCORE: ' + this.props.team_score}/>
          <Box id='fieldDiv' innerText={sections}/>
        </div>
        <div className='right'>
          <Box id='playersDiv' title='PLAYERS:' innerText={players} />
        </div>
      </div>
    )
  }
}

export default Main;
