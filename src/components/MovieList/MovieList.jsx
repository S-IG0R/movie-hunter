import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

class MovieList extends React.Component {
  render() {
    const grid = { '--grid': 'repeat(auto-fill, minmax(300px, 1fr))' };
    const { movies } = this.props;
    return (
      <ul
        style={grid}
        className="grid py-15 gap-8 m-auto w-full max-w-[1450px] justify-items-center grid-cols-[var(--grid)]"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </ul>
    );
  }
}

export { MovieList };
