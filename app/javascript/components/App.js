import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Films from './Films'
import Reserves from './Reserves'
import './App.scss'
import { CalendarOutlined, VideoCameraOutlined } from '@ant-design/icons'
import "antd/dist/antd.css"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='menu'>
            <Link to="/">
              <VideoCameraOutlined />
              <span>Peliculas</span>
            </Link>
            <Link to="/Reservas">
              <CalendarOutlined />
              <span>Reservas</span>
            </Link>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path="/" render={() => <Films/>} />
              <Route path="/Reservas" render={() => <Reserves/>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
