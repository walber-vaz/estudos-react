import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   numberClick: 0,
    // };

    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

  // Public class fields
  state = {
    numberClickBtn1: 0,
    numberClickBtn2: 0,
    numberClickBtn3: 0,
  };

  // Pode fazer uma Arrow Function no lugar do bind

  handleClickBtn1(param) {
    const { numberClickBtn1 } = this.state;
    this.setState(
      (state) => ({
        numberClickBtn1: state.numberClickBtn1 + param,
      }),
      () => {
        console.log(`Btn1: ${numberClickBtn1}`);
      },
    );
  }

  handleClickBtn2(param) {
    const { numberClickBtn2 } = this.state;
    this.setState(
      (state) => ({
        numberClickBtn2: state.numberClickBtn2 + param,
      }),
      () => {
        console.log(`Btn2: ${numberClickBtn2}`);
      },
    );
  }

  handleClickBtn3(param) {
    const { numberClickBtn3 } = this.state;
    this.setState(
      (state) => ({
        numberClickBtn3: state.numberClickBtn3 + param,
      }),
      () => {
        console.log(`Btn3: ${numberClickBtn3}`);
      },
    );
  }

  getBtnColor(param) {
    return param % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numberClickBtn1, numberClickBtn2, numberClickBtn3 } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => this.handleClickBtn1(1)}
          style={{ backgroundColor: this.getBtnColor(numberClickBtn1) }}
        >
          {numberClickBtn1}
        </button>
        <button
          type="button"
          onClick={() => this.handleClickBtn2(1)}
          style={{ backgroundColor: this.getBtnColor(numberClickBtn2) }}
        >
          {numberClickBtn2}
        </button>
        <button
          type="button"
          onClick={() => this.handleClickBtn3(1)}
          style={{ backgroundColor: this.getBtnColor(numberClickBtn3) }}
        >
          {numberClickBtn3}
        </button>
      </div>
    );
  }
}

export default App;
