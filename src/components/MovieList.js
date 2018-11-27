import React from 'react'
import { Link } from 'react-router-dom'
import MovieGenreFetch from '../containers/MovieGenreFetch'
import MovieDate from './MovieDate'
import './MovieList.css'

const POSTER_API = 'http://image.tmdb.org/t/p/w200'

export default ({ data }) => (
  <div className='movie-list'>
    {data.map(movie => (
      <Link className='item' to={'/' + movie.id} key={movie.id}>
        <img src={`${POSTER_API}${movie.poster_path}`} alt={movie.title} />
        <div className='description'>
          <header>
            <h2>{movie.title}</h2>
            <div className='vote'>{movie.vote_average * 10}%</div>
            <div className='release-date'>
              <MovieDate date={movie.release_date} />
            </div>
          </header>
          <div className='overview'>{movie.overview}</div>
          <div className='genres'>
            <MovieGenreFetch id={movie.id} />
          </div>
        </div>
      </Link>
    ))}
  </div>
)
