import React from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { Spinner } from '@heroui/spinner';
import { PaginationComponent } from '../../components/Pagination/Pagination';
import { NothingFound } from '../../components/NothingFound/NothingFound';

class Main extends React.Component {
  render() {
    const { movies, isLoading, totalFilms, currentPage, onChangePage } =
      this.props;
    return (
      <main className="flex flex-col min-w-0 grow">
        {isLoading ? (
          <Spinner className="m-auto" size="lg" variant="default" />
        ) : movies.length ? (
          <>
            <MovieList movies={movies} />
            <PaginationComponent
              totalFilms={totalFilms}
              currentPage={currentPage}
              handleChangePage={onChangePage}
            />
          </>
        ) : (
          <NothingFound />
        )}
      </main>
    );
  }
}

export { Main };
