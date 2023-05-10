import React, { Component } from 'react';

export default class LifecycleCounter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && props.seed !== state.seed) {
      return {
        ...state,
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    if (newProps.ignoreProp !== this.props.ignoreProp) {
      console.log('Should Component Update - No Render');
      console.log('--------------------');
      return false;
    }
    return true;
  }

  render() {
    console.log('Render');

    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('Mounted');
    console.log('--------------------');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Snapshot Taken');
    return null;
  }

  componentDidUpdate() {
    console.log('Updated');
    console.log('--------------------');
  }

  componentWillUnmount() {
    console.log('Unmounted');
    console.log('--------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch!');
    this.setState({ error, info });
  }
}
