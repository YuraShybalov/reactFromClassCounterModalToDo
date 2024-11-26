import { Component } from 'react';
import Counter from './Counter/Counter';
import Header from './Header/Header';

import React from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div>
        <Header showModal={this.showModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
      </div>
    );
  }
}

export default App;
