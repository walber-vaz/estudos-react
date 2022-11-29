import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        click
      </button>
    );
  }
}

export default App;
