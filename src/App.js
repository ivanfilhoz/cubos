import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './routes/Index'
import Movie from './routes/Movie'
import 'normalize.css'
import 'typeface-abel'
import 'typeface-lato'
import './App.css'

class App extends Component {
  render () {
    return (
      <Fragment>
        <header>
          <h1>Movies</h1>
        </header>
        <Router>
          <main>
            <Route path='/' exact component={Index} />
            <Route path='/:id' component={Movie} />
          </main>
        </Router>
      </Fragment>
    )
  }
}

export default App
