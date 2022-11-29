import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   numberClick: 0,
    // };

    this.handleClick = this.handleClick.bind(this);
  }

  // Public class fields
  state = {
    numberClick: 0,
  };

  // Pode fazer uma Arrow Function no lugar do bind

  handleClick() {
    this.setState((state) => ({
      numberClick: state.numberClick + 1,
    }));
  }

  render() {
    const { numberClick } = this.state;
    return (
      <button type="button" onClick={this.handleClick}>
        {numberClick}
      </button>
    );
  }
}

export default App;
