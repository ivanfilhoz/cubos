import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './routes/Index'
import Movie from './routes/Movie'
import 'normalize.css'
import 'typeface-abel'
import 'typeface-lato'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <header>
            <Link to='/'><h1>Movies</h1></Link>
          </header>
          <main>
            <Route path='/' exact component={Index} />
            <Route path='/:id' component={Movie} />
          </main>
        </Fragment>
      </Router>
    )
  }
}

export default App
