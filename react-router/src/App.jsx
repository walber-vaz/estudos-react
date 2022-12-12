import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/About'
import Contato from './pages/Contato'

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contato" component={Contato} />
      </Router>
    )
  }
}

export default App