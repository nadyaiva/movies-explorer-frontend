import "./Movies.css";
import { useState} from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import moviesApi from "../../utils/Api/MoviesApi";
import {messages} from "../../utils/config";
import filterMovies from '../../utils/filterMovies';

function Movies() {
    const [message, setMessage] = useState('');
    const [foundMovies, setFoundMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
 
    
    function handleSearchMovie(inputData) {

        console.log('handleSearchMovie: ' + inputData)
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
                const results = filterMovies({ filterParams: inputData, movies });
                if (!results.length) {
                    setMessage(messages.noResultsFound);
                }
                console.log(results);
                setFoundMovies(results);
            })
            .catch(() => setMessage(messages.baseErrorMessage))
            .finally(() => {
                setIsLoading(false);
            });
        }

    return (
        <div className="movies">
            <Search
                onSearch={handleSearchMovie}
            />
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