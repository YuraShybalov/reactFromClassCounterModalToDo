import { Component } from 'react';
import css from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 0,
  };

  hendeleClikIncrement = () =>
    this.setState(prevState => ({ value: prevState.value + 1 }));

  hendeleClikDecrement = () =>
    this.setState(prevState => ({ value: prevState.value - 1 }));

  render() {
    // console.log(`this.state:>>`, this.state);
    return (
      <div>
        <div className={css.counter}>
          <h5 className={css.title}>Counter</h5>
          <p>{this.state.value}</p>
          <ul className={css.listButtons}>
            <li>
              <button onClick={this.hendeleClikIncrement}>+</button>
            </li>
            <li>
              <button onClick={this.hendeleClikDecrement}> - </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Counter;
