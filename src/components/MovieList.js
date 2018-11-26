import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './MovieList.css'

const POSTER_API = 'http://image.tmdb.org/t/p/w200'

export default ({ data }) => (
  <div className='movie-list'>
    {data.map((movie) => (
      <Link className='item' to={'/' + movie.id} key={movie.id}>
        <img src={`${POSTER_API}${movie.poster_path}`} alt={movie.title} />
        <div className='description'>
          <header>
            <h2>{movie.title}</h2>
            <div className='vote'>{movie.vote_average * 10}%</div>
            <div className='release-date'>{moment(movie.release_date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</div>
          </header>
          <div className='overview'>{movie.overview}</div>
        </div>
      </Link>
    ))}
  </div>
)
