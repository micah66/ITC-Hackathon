// class Player extends React.Component {
//
//   render () {
//     return (
//
//     )
//   }
// }
//
class Roster extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: ['Player 1', 'Player 2', 'Player 3']
    }
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
  render () {
    return (
      <div>
        <h1>Add player</h1>
        <input type='text' ref={(input) => { this.inputText = input } } />
        <button onClick={this.addPlayer.bind(this)}>Add</button>
        <ul>
          {this.state.players.map((player, index) => <li id={'player' + (index + 1)}>{player}<button onClick={this.deletePlayer.bind(this)} playerName={player}>Delete</button></li>)}
        </ul>
      </div>
    )
  }
}


ReactDOM.render(
  <Roster />,
  document.getElementById('root')
)
