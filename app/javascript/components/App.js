import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Films from './Films'
import Reserves from './Reserves'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Films/>} />
          <Route path="/Reservas" render={() => <Reserves/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
