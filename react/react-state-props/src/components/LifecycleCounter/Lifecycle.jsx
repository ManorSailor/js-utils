import React, { Component } from 'react';
import LifecycleCounter from './LifecycleCounter';

export default class Lifecycle extends Component {
  state = {
    isMounted: false,
    seed: 40,
  };

  toggleComponent = () => this.setState({ isMounted: !this.state.isMounted });
  ignoreProp = () => this.setState({ ignoreProp: Math.random() });
  generateSeed = () =>
    this.setState({ seed: parseInt(Math.random() * 100, 10) });

  render() {
    const { isMounted, ignoreProp, seed } = this.state;

    return (
      <>
        {isMounted && (
          <>
            <LifecycleCounter ignoreProp={ignoreProp} seed={seed} />
            <button onClick={this.ignoreProp}>Ignore Prop</button>
            <button onClick={this.generateSeed}>Generate Seed</button>
          </>
        )}
        <button onClick={this.toggleComponent}>
          {isMounted ? `Unmount` : `Mount`}
        </button>
      </>
    );
  }
}
