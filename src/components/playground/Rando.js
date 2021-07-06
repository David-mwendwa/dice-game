import React from 'react';

class Rando extends React.Component {
  state = { num: 0 };

  makeTimer = () => {
    setInterval(() => {
      this.setState({ num: Math.floor(Math.random() * this.props.maxNum) });
    }, 300);
  };

  render() {
    return (
      <div>
        <button onClick={this.makeTimer}>Play</button>
        <h1>{this.state.num}</h1>
      </div>
    );
  }
}

export default Rando;
