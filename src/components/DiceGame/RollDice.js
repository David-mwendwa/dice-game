import React from 'react';

import Die from './Die';

import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  state = {
    die1: 'one',
    die2: 'five',
    isRolling: false,
  };

  roll = () => {
    const rand1 = Math.floor(Math.random() * this.props.sides.length);
    const rand2 = Math.floor(Math.random() * this.props.sides.length);
    const newDie1 = this.props.sides[rand1];
    const newDie2 = this.props.sides[rand2];
    this.setState({ die1: newDie1, die2: newDie2, isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='Dice'>
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        {this.state.die1 === this.state.die2 && <h1 style={{color: 'green'}}>You Win!!😀</h1>}
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Role Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
