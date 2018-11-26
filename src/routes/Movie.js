import React, { Component } from 'react'
import MovieFetch from '../containers/MovieFetch'
import './Movie.css'

class Movie extends Component {
  render () {
    return (
      <section>
        <MovieFetch id={this.props.match.params.id} />
      </section>
    )
  }
}

export default Movie
