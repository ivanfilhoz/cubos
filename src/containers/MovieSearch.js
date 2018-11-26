import React, { Component, Fragment } from 'react'
import MovieList from '../components/MovieList'
import Pager from '../components/Pager'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie'
const URL_PREFIX = `${SEARCH_API}?api_key=${process.env.REACT_APP_API_KEY}`

class MovieSearch extends Component {
  constructor () {
    super()

    this.state = {
      timer: null,
      loading: false,
      error: false,
      movies: [],
      totalPages: 1,
      currentPage: 1
    }

    this.handlePager = this.handlePager.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  fetchMovies (query, page) {
    const encodedQuery = window.encodeURI(query)
    const realPage = Math.ceil(page / 4)

    this.setState({ loading: true })

    window.fetch(`${URL_PREFIX}&query=${encodedQuery}&page=${realPage}`)
      .then(response => response.json())
      .then(data => {
        const sliceIndex = (page - 1) % 4 * 5

        this.setState({
          loading: false,
          error: false,
          movies: data.results.slice(sliceIndex, sliceIndex + 5),
          totalPages: Math.ceil(data.total_results / 5),
          currentPage: page
        })
      })
      .catch(() => this.setState({
        loading: false,
        error: true
      }))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.query) {
      if (this.state.timer) {
        window.clearTimeout(this.state.timer)
      }

      this.setState({
        loading: true,
        timer: setTimeout(() => {
          this.setState({ timer: null })
          this.fetchMovies(nextProps.query, 1)
        }, 500)
      })
    } else {
      this.setState({ loading: false, error: false, movies: [] })
    }
  }

  handlePager (event) {
    const nextPage = Number(event.target.dataset.number)
    this.setState({ currentPage: nextPage })
    this.fetchMovies(this.props.query, nextPage)
  }

  render () {
    if (this.state.loading) {
      return 'Aguarde...'
    }

    if (this.state.error) {
      return 'Oops! Algo errado aconteceu.'
    }

    if (!this.state.movies.length) {
      return this.props.query ? 'Nenhum filme foi encontrado.' : ''
    }

    return (
      <Fragment>
        <MovieList data={this.state.movies} />
        <Pager total={this.state.totalPages} current={this.state.currentPage} handler={this.handlePager} />
      </Fragment>
    )
  }
}

export default MovieSearch
