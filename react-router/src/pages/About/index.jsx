import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <h1>About</h1>
      </div>
    )
  }
}

export default About