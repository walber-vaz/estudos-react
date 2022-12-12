import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'w2k',
      role: 'admin'
    }
  }

  render() {
    const { history } = this.props
    return (
      <>
        <div>
          <h1>Home</h1>
        </div>
        <button 
          type='button'
          onClick={() => history.push('/welcome')}
        >
          Acesse a pagina de Boas-Vindas</button>
      </>
    )
  }
}

export default Home