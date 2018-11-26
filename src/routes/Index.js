import React, { Component, Fragment } from 'react'
import MovieSearch from '../containers/MovieSearch'
import './Index.css'

class Index extends Component {
  constructor () {
    super()

    this.state = {
      query: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    this.setState({ query: event.target.value })
  }

  render () {
    return (
      <Fragment>
        <section>
          <input type='text' id='search' onChange={this.handleSearch} value={this.state.query} placeholder='Busque um filme por nome, ano ou gênero' />
        </section>
        <section>
          <MovieSearch query={this.state.query} />
        </section>
      </Fragment>
    )
  }
}

export default Index
