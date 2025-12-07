import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

class MovieList extends React.Component {
  render() {
    const grid = { '--grid': 'repeat(auto-fill, minmax(250px, 1fr))' };
    const { movies } = this.props;
    return (
      <ul
        style={grid}
        className="grid sm:py-15 py-4 sm:gap-8 gap-4 m-auto w-full max-w-[1450px] justify-items-center grid-cols-[var(--grid)]"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </ul>
    );
  }
}

export { MovieList };
