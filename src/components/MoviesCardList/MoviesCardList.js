import "./MoviesCardList.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import CurrentUserContext from '../../contexts/currentUserContext';
import MoviesCard from "../MoviesCard/MoviesCard";
import MainApi from "../../utils/Api/MainApi";

function MoviesCardList({foundMovies}) {
  const { savedMovies, setSavedMovies } = useState('');
  const [moviesLength, setMoviesLength] = useState(0);

  const { pathname } = useLocation();
  const isSavedMoviePage = pathname === '/saved-movies';

  useEffect(() => {
    console.log(foundMovies.length + ' ' + moviesLength)
    window.addEventListener('resize', handleChangeWidthScreen);
    return () => {
      window.removeEventListener('resize', handleChangeWidthScreen);
    };
  }, []);

  const handleChangeWidthScreen = () => {
    if (window.innerWidth <= 600) {
      setMoviesLength(5);
    } else if (window.innerWidth <= 1024) {
      setMoviesLength(8);
    } else {
      setMoviesLength(12);
    }
  };

  const loadMoreMovies = () => {
    if (window.innerWidth > 1024) setMoviesLength(moviesLength + 3);
    else {
      setMoviesLength(moviesLength + 2);
    }
  };

  const isSaved = (movie) => {
    if (isSavedMoviePage) {
      return true;
    } else {
      return savedMovies?.some((savedMovie) => {
        return savedMovie.movieId === movie.id;
      });
    }
  };

  const handleSaveMovie = (movie) => {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (id) => {
    MainApi.deleteMovie(id)
      .then((deletedMovie) => {
        setSavedMovies(savedMovies.filter((savedMovie) => {
          return !(savedMovie._id === deletedMovie._id);
        }));
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="card-list">
      <ul className="list-grid">
        {foundMovies.slice(0, moviesLength).map((movie) => (
          <MoviesCard 
            key={movie.id}
            movie={movie}
            isSaved={isSaved(movie)} 
            onSave={handleSaveMovie} 
            onDel={handleDeleteMovie}
        />
        ))}
      </ul>
      { (foundMovies.length > 0 && foundMovies.length > moviesLength) && <button className="card-list__more-button" onClick={loadMoreMovies}>Ещё</button> }
    </div>
  )
}

export default MoviesCardList;