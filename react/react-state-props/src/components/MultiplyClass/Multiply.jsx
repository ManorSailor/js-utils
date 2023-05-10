import React, { Component } from 'react';

export default class MultiplyClass extends Component {
  state = {
    multiplier: 1,
  };

  increaseMultiplier = () => {
    const multiplier = this.state.multiplier + 1;

    this.setState({
      multiplier,
    });
  };

  resetState() {
    this.setState({
      multiplier: 1,
    });
  }

  shouldComponentUpdate(newProps, newState) {
    if (
      newState.multiplier <= 10 ||
      newProps.multiplicand !== this.props.multiplicand
    ) {
      return true;
    }

    clearInterval(this.timerID);
    return false;
  }

  render() {
    const { multiplier } = this.state;
    const { multiplicand } = this.props;

    return (
      <div>
        {multiplicand} * {multiplier} = {multiplicand * multiplier}
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(this.increaseMultiplier, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.multiplicand !== this.props.multiplicand) {
      clearInterval(this.timerID);
      this.resetState();
      this.timerID = setInterval(this.increaseMultiplier, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
