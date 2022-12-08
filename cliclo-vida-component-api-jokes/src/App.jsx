import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: []
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const reqHeaders = { headers: { Accept: 'application/json' } };
        const resJoke = await fetch('https://icanhazdadjoke.com/', reqHeaders);
        const reqObj = await resJoke.json();
        this.setState({
          loading: false,
          jokeObj: reqObj,
        })
      }
    );
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    return this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button onClick={this.saveJoke}>Salvar piada</button>
      </div>
    )
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
      </div>
    )
  }
}

export default App