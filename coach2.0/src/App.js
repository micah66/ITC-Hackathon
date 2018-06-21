import React, { Component } from 'react';
import Main from './Components/js/index'
import Roster from './Components/js/roster'
import Statistics from './Components/js/statistics'
import './Components/css/index.css'
import './Components/css/shared.css'
import './App.css';


class App extends Component {
  constructor (props) {
  	super(props)
    this.germany = {
     '4-4-2': {
       'Team Score':810.5827234677516,
       'goal':['Manuel Neuer'],
       'defender':['Mats Hummels','Jerome Boateng','Matthias Ginter','Jonas Hector'],
       'midfield':['Mesut Oezil','Marco Reus','Toni Kroos','Thomas Mueller'],
       'attacker':['Mario Gomez','Timo Werner']
     },
     '5-3-2':
     {
       'Team Score':798.8886820932428,
       'goal':['Manuel Neuer'],
       'defender':['Mats Hummels','Jerome Boateng','Matthias Ginter','Jonas Hector','Marvin Plattenhardt'],
       'midfield':['Mesut Oezil','Marco Reus','Toni Kroos'],
       'attacker':['Mario Gomez','Timo Werner']
     },
     '3-5-2':
     {
       'Team Score':820.4556756649184,
       'goal':['Manuel Neuer'],
       'defender':['Mats Hummels','Jerome Boateng','Matthias Ginter'],
       'midfield':['Mesut Oezil','Marco Reus','Toni Kroos','Thomas Mueller','Ilkay Guendogan'],
       'attacker':['Mario Gomez','Timo Werner']
     },
     '4-5-1':
     {
       'Team Score':823.5926845576207,
       'goal':['Manuel Neuer'],
       'defender':['Mats Hummels','Jerome Boateng','Matthias Ginter','Jonas Hector'],
       'midfield':['Mesut Oezil','Marco Reus','Toni Kroos','Thomas Mueller','Ilkay Guendogan'],
       'attacker':['Mario Gomez']
     },
     '5-4-1':
     {
       'Team Score':812.6434458418819,
       'goal':['Manuel Neuer'],
       'defender':['Mats Hummels','Jerome Boateng','Matthias Ginter','Jonas Hector','Marvin Plattenhardt'],
       'midfield':['Mesut Oezil','Marco Reus','Toni Kroos','Thomas Mueller'],
       'attacker':['Mario Gomez']
     }
   }
    this.state = {
      players: this.germany['4-4-2']['goal'].concat(this.germany['4-4-2']['defender']).concat(this.germany['4-4-2']['midfield']).concat(this.germany['4-4-2']['attacker']),
      page: 0
    }
  }
  lineupsPage() {
    this.setState({
      page: 0
    })
  }

  rosterPage() {
    this.setState({
      page: 1
    })
  }

  statisticsPage() {
    this.setState({
      page: 2
    })
  }

  getTactic(e) {
    this.setState({
      players: this.germany[e.target.value]['goal'].concat(this.germany[e.target.value]['defender']).concat(this.germany[e.target.value]['midfield']).concat(this.germany[e.target.value]['attacker']),

    })
  }

  addPlayer() {
    const newState = this.state.players.slice()
    const player = this.inputText.value
    newState.push(player)
    this.setState({
      players: newState
    })
  }
  deletePlayer(e) {
    const newState = this.state.players.slice()
    const player = e.target.attributes.playername.value
    const playerIndex = newState.indexOf(player)
    newState.splice(playerIndex, 1)
    this.setState({
      players: newState
    })
  }
    render() {
      const tactic =  <select onChange={this.getTactic.bind(this)} name='tactics'>
                        <option value='4-4-2'>4-4-2</option>
                        <option value='5-3-2'>5-3-2</option>
                        <option value='3-5-2'>3-5-2</option>
                        <option value='4-5-1'>4-5-1</option>
                        <option value='5-4-1'>5-4-1</option>
                      </select>

      const addPlayer = <div>
                          <h1>Add player</h1>
                          <input type='text' ref={(input) => { this.inputText = input } } />
                          <button onClick={this.addPlayer.bind(this)}>Add</button>
                        </div>
    return (
      <div className="App">
        <nav>
          <ul id="nav">
            <li className="nav-items"><button onClick={this.lineupsPage.bind(this)}>Lineups</button></li>
            <li className="nav-items"><button onClick={this.rosterPage.bind(this)}>Roster</button></li>
            <li className="nav-items"><button onClick={this.statisticsPage.bind(this)}>Statistics</button></li>
          </ul>
        </nav>
        {this.state.page === 0 ? <Main tactic={tactic} players={this.state.players} /> : null }
        {this.state.page === 1 ? <Roster innerText={addPlayer} handleDelete={this.deletePlayer.bind(this)} players={this.state.players} /> : null }
        {this.state.page === 2 ? <Statistics players={this.state.players} /> : null }
      </div>
    );
  }
}

export default App;
