import { Component } from 'react';
import Counter from './Counter/Counter';
import Header from './Header/Header';

import React from 'react';

class App extends Component {
  state = {
    modalOpen: false,
  };
  render() {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
