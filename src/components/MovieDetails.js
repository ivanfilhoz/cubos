import React from 'react'
import moment from 'moment'
import languages from '@cospired/i18n-iso-languages'
import MovieGenres from './MovieGenres'
import './MovieDetails.css'

const POSTER_API = 'http://image.tmdb.org/t/p/w300'
const formatCurrency = value => new Intl.NumberFormat('pt-BR').format(value)
languages.registerLocale(require('@cospired/i18n-iso-languages/langs/pt.json'))

export default ({ data: movie }) => (
  <div className='movie-details'>
    <header>
      <h2>{movie.title}</h2>
      <div className='release-date'>
        {moment(movie.release_date, 'YYYY-MM-DD').format('DD/MM/YYYY')}
      </div>
    </header>
    <div className='body'>
      <img src={`${POSTER_API}${movie.poster_path}`} alt={movie.title} />
      <div className='description'>
        <h3>Sinopse</h3>
        <div className='overview'>{movie.overview}</div>
        <h3>Informações</h3>
        <div className='info'>
          <div className='table'>
            <div>
              <h4>Situação</h4>
              <span>
                {
                  {
                    Rumored: 'Rumores',
                    Planned: 'Planejado',
                    'In Production': 'Em Produção',
                    'Post Production': 'Em Pós-Produção',
                    Released: 'Lançado',
                    Canceled: 'Cancelado'
                  }[movie.status]
                }
              </span>
            </div>
            <div>
              <h4>Idioma</h4>
              <span>
                {
                  (() => {
                    const language = languages.getName(movie.original_language, 'pt')
                    return language.charAt(0).toUpperCase() + language.slice(1)
                  })()
                }
              </span>
            </div>
            <div>
              <h4>Duração</h4>
              <span>
                {Math.floor(movie.runtime / 60) + 'h' + (movie.runtime % 60) + 'm'}
              </span>
            </div>
            <div>
              <h4>Orçamento</h4>
              <span>
                ${formatCurrency(movie.budget)}
              </span>
            </div>
            <div>
              <h4>Receita</h4>
              <span>
                ${formatCurrency(movie.revenue)}
              </span>
            </div>
            <div>
              <h4>Lucro</h4>
              <span>
                ${formatCurrency(movie.revenue - movie.budget)}
              </span>
            </div>
          </div>
          <div className='vote'>{movie.vote_average * 10}%</div>
          <div className='genres'>
            <MovieGenres data={movie.genres} />
          </div>
        </div>
      </div>
    </div>
  </div>
)
