import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contato extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <h1>Contato</h1>
      </div>
    )
  }
}

export default Contato