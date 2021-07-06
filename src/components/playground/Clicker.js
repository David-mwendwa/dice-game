import React from 'react';

class Clicker extends React.Component {
  state = { num: 0 };

  randomize = () => {
    return this.setState({ num: Math.floor(Math.random() * 10) });
  };

  render() {
    return (
      <div>
        <h2>Number is: {this.state.num}</h2>
        {this.state.num !== 7 ? (
          <button onClick={this.randomize}>Click</button>
        ) : (
          <h3 style={{ color: 'green' }}>You Win!!</h3>
        )}
      </div>
    );
  }
}

export default Clicker;
