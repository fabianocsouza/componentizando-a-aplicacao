import { useEffect, useState } from 'react';
import { useAuthGenre } from '../hook/useAuthGenre';
import { GenreResponseProps } from '../interface/GenreResponseProps';
import { MovieProps } from '../interface/MovieProps';
import { api } from '../services/api';
import { MovieCard } from './MovieCard';

export function Content() {
  const { selectedGenreId } = useAuthGenre()

  const [movies, setMovies] = useState<MovieProps[]>([]);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}