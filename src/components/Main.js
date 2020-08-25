import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/menu' component={Menu} />
      </Switch>
    </Router>
  )
}

export default Main
