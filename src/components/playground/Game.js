import React from 'react';

class Game extends React.Component {
  state = {
    players: [
      'Cate',
      'James',
      'Agnes',
      'Cleophas',
      'Daniel',
      'Ben',
      'Michael',
      'Olga',
      'Nathan',
      'Franco',
    ],
    score: 0,
    gameOver: false,
  };

  randomize = () => {
    return this.setState({ score: Math.floor(Math.random() * 10) });
  };

  render() {
    return (
      <div>
        <button onClick={this.randomize}>play</button>
        <h2>{this.state.players[this.state.score]}</h2>
        <div>
          Your score is: {this.state.score}
          <span>{this.state.score === 7 && ' Win!!💥'}</span>
        </div>
      </div>
    );
  }
}

export default Game;
