import React from 'react'
import './MovieGenres.css'

export default ({ data: genres }) => (
  <ul className='movie-genres'>
    {genres.map(genre => (
      <li key={genre.id}>{genre.name}</li>
    ))}
  </ul>
)
