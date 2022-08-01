import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFilmRequest, getFilmListRequest } from './services/actions';
import styles from './MovieList.module.scss';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieModuleReducer.MoviesReducer.movies);

  useEffect(() => {
    dispatch(getFilmListRequest());
  }, []);

  const onDeleteHandler = (id, index) => {
    movies.splice(index, 1);
    dispatch(deleteFilmRequest({ id, movies }));
  };

  return (
    <div className={styles.wrapper}>
      <span>MovieList</span>
      <ol>
        {movies?.map((film, index) => (
          <li key={film?.id}>
            {film?.title}, {film?.format}, {film?.year}
            <button onClick={() => onDeleteHandler(film?.id, index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MovieList;
