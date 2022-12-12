import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const { history } = this.props
    const { location } = history

    return (
      <>
        <div>
          <h1>Bem-vindo</h1>
          <h2>
            {
              location.state ? location.state.name : 'Visitante'
            }
          </h2>
        </div>
        <button
          type='button'
          onClick={() => console.log(location.pathname)}
        >
          History
        </button>
      </>
    )
  }
}

export default Welcome