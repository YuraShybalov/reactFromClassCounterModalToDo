import { Component } from 'react';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import ToDoList from './ToDolist/ToDoList';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <div>
        <Header showModal={this.toggle} />
        <Counter />
        <ToDoList />
        {this.state.isOpen && <Modal closeModal={this.toggle}>Some</Modal>}
      </div>
    );
  }
}

export default App;
