import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/contato">Contato</Link>
        <Link to="/about">About</Link>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home