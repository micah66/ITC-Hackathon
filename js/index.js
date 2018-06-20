class Box extends React.Component {
  constructor (props) {
  	super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className={'box ' + this.props.classNames} id={this.props.id}>
          <h3 className='title'>{this.props.title}</h3>
          {this.props.innerText}
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    const players = <ul id='playersList'>
                      <li className='player'>Player 1 <input id='player1' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 2 <input id='player2' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 3 <input id='player3' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 4 <input id='player4' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 5 <input id='player5' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 6 <input id='player6' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 7 <input id='player7' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 8 <input id='player8' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 9 <input id='player9' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 10 <input id='player10' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 11 <input id='player11' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 12 <input id='player12' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 13 <input id='player13' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 14 <input id='player14' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 15 <input id='player15' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 16 <input id='player16' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 17 <input id='player17' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 18 <input id='player18' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 19 <input id='player19' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 20 <input id='player20' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 21 <input id='player21' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 22 <input id='player22' type='range' min='0' max='100' /></li>
                      <li className='player'>Player 23 <input id='player23' type='range' min='0' max='100' /></li>
                    </ul>
    return (
      <div id='wrapper'>
        <div className='left'>
          <Box id='opponentDiv' classNames='' title='OPPONENT: ' innerText={<input type='text' />} />
          <Box id='formationDiv' classNames='' title='FORMATION:' innerText={<p>3-4-3</p>} />
          <Box id='fieldDiv' />
        </div>
        <div className='right'>
          <Box id='playersDiv' title='PLAYERS:' innerText={players} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
