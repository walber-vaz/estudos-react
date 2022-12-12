import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </Router>
  )
}

export default App
