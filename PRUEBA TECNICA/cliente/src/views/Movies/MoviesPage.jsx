import React from 'react'
import { useMovies } from '../../hooks/useMovies'

function MoviesPage() {

  const { movies } = useMovies();

  return (
    <div>
      {
        movies.map((movies, i) => (
          <div className=''>
            <img src={movies.images.Poster_Art.url} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default MoviesPage
