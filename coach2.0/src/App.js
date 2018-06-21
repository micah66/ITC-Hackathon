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
    this.state = {
      players: [],
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


  addPlayer() {
    debugger
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
        {this.state.page === 0 ? <Main players={this.state.players} /> : null }
        {this.state.page === 1 ? <Roster innerText={addPlayer} handleDelete={this.deletePlayer.bind(this)} players={this.state.players} /> : null }
        {this.state.page === 2 ? <Statistics players={this.state.players} /> : null }
      </div>
    );
  }
}

export default App;
