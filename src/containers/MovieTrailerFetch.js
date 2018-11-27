import React, { Component } from 'react'

const MOVIE_API = 'https://api.themoviedb.org/3/movie'
const URL_SUFFIX = `videos?api_key=${process.env.REACT_APP_API_KEY}`

class MovieTrailerFetch extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    window.fetch(`${MOVIE_API}/${this.props.id}/${URL_SUFFIX}`)
      .then(response => response.json())
      .then(data => this.setState({
        loading: false,
        data: data.results
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

    if (this.state.error) {
      return 'Oops! Algo errado aconteceu.'
    }

    const videos = this.state.data.filter(_ =>
      _.type === 'Trailer' && _.site === 'YouTube')

    if (!videos.length) {
      return ''
    }

    return (
      <div style={
        {
          position: 'relative',
          paddingTop: '56.25%'
        }
      }>
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${videos[0].key}`}
          style={
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }
          }
        />
      </div>
    )
  }
}

export default MovieTrailerFetch
