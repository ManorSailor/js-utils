import React, { Component } from 'react';

import Counter from './components/Counter';
import MultiplyClass from './components/MultiplyClass/Multiply';
import MultiplyHooks from './components/MultiplyHooks/Multiply';
import Lifecycle from './components/LifecycleCounter/Lifecycle';
import ColorHooks from './components/ColorHooks/ColorHooks';

class App extends Component {
  state = {
    count: 1,
  };

  countUp = () => this.setState({ count: this.state.count + 1 });
  countDown = () => this.setState({ count: this.state.count - 1 });

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <Counter
          count={count}
          countUp={this.countUp}
          countDown={this.countDown}
        />

        <MultiplyClass multiplicand={count} />
        <MultiplyHooks multiplicand={count} />
        <ColorHooks />
        <Lifecycle />
      </div>
    );
  }
}

export default App;
