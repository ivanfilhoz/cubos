import React, { Component, Fragment } from 'react'
import MovieDetails from '../components/MovieDetails'

const MOVIE_API = 'https://api.themoviedb.org/3/movie'
const URL_SUFFIX = `?api_key=${process.env.REACT_APP_API_KEY}`

class MovieFetch extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    window.fetch(`${MOVIE_API}/${this.props.id}${URL_SUFFIX}`)
      .then(response => response.json())
      .then(data => this.setState({
        loading: false,
        data
      }))
      .catch(() => this.setState({
        loading: false,
        error: true
      }))
  }

  render () {
    if (this.state.loading) {
      return 'Aguarde...'
    }

    return (
      <MovieDetails data={this.state.data} />
    )
  }
}

export default MovieFetch
