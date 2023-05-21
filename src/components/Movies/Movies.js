import "./Movies.css";
import { useState} from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import moviesApi from "../../utils/Api/MoviesApi";
import {messages} from "../../utils/config";
import filterMovies from '../../utils/filterMovies';

function Movies() {
    const [message, setMessage] = useState('');
    const [foundMovies, setFoundMovies] = useState([]);
    const [isShortChecked, seIsShortChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
 
    
    function handleSearchMovie(inputData) {
        if (!inputData) {
            setMessage(messages.emptyInputError);
            localStorage.setItem('results', JSON.stringify([]));
            return;
        }
        setIsLoading(true);
        setMessage('');
        moviesApi.getAllMovies()
            .then(recivedMovies => {
                const movies = recivedMovies.map((movie) => {
                    return {
                        ...movie,
                        movieId: movie.id
                    };
                });
                const results = filterMovies({ filterParams: inputData, movies, isShortChecked });
                if (!results.length) {
                    setMessage(messages.noResultsFound);
                }
                setFoundMovies(results);
            })
            .catch(() => setMessage(messages.baseErrorMessage))
            .finally(() => {
                setIsLoading(false);
            });
        }

        const handleCheckbox = () => {
            seIsShortChecked(!isShortChecked);
          };

    return (
        <div className="movies">
            <SearchForm onSearch={handleSearchMovie} onCheck={handleCheckbox} isChecked={isShortChecked}/>
            <p className="movies__message">{message ? message : null}</p>
            <MoviesCardList 
            isLoading={isLoading}
            foundMovies={foundMovies}
            />
            {isLoading ? <Preloader/> : null}
        </div>
    )
}

export default Movies;