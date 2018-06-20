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
                      <li className='player'>Player 1</li>
                      <li className='player'>Player 2</li>
                      <li className='player'>Player 3</li>
                      <li className='player'>Player 4</li>
                      <li className='player'>Player 5</li>
                      <li className='player'>Player 6</li>
                      <li className='player'>Player 7</li>
                      <li className='player'>Player 8</li>
                      <li className='player'>Player 9</li>
                      <li className='player'>Player 10</li>
                      <li className='player'>Player 11</li>
                    </ul>
    return (
      <div id='wrapper'>
        <div className='left'>
          <Box id='opponentDiv' classNames='' title='OPPONENT: ' innerText={<input type='text' />} />
          <Box id='formationDiv' classNames='' title='FORMATION:' innerText={<p>3-4-3</p>} />
          <Box id='fieldDiv' classNames='' title='FIELD DISPLAY:' />
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
