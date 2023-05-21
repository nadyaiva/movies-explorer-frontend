import { maxShortFilmDuration } from './constants';

export default function filterMovies ({ filterParams, movies }) {
  if (filterParams.isShortMovies) {
    return movies.filter((movie) => {
      return checkName(movie.nameRU, filterParams) && checkDuration(movie.duration, maxShortFilmDuration);
    });
  } else {
    return movies.filter((movie) => checkName(movie.nameRU, filterParams));
  }
}

const checkName = (movieName, searchName) => {
  return movieName.toLowerCase().includes(searchName.toLowerCase());
};

const checkDuration = (movieDuration, maxTime) => {
  return movieDuration <= maxTime;
};
