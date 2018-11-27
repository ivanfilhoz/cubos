import React, { Component } from 'react'
import MovieGenres from '../components/MovieGenres'

const MOVIE_API = 'https://api.themoviedb.org/3/movie'
const URL_SUFFIX = `?api_key=${process.env.REACT_APP_API_KEY}`

class MovieGenreFetch extends Component {
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
        data: data.genres
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
      <MovieGenres data={this.state.data} />
    )
  }
}

export default MovieGenreFetch
