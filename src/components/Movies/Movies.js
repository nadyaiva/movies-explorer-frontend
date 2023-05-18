import "./Movies.css";
import { useState} from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import moviesApi from "../../utils/Api/MoviesApi";

function Movies() {

   const [allMovies, setAllMovies] = useState([]);
   const [areMoviesLoaded, setAreMoviesLoaded] = useState(false);
 
    
    function handleSearchMovie(inputData) {
        moviesApi.getAllMovies()
            .then(recivedMovies => {
                setAllMovies(recivedMovies)
                console.log(inputData);
            })
            .finally(() => {
                setAreMoviesLoaded(true);
            });
        }

    return (
        <div className="Movies">
            <Search
                onSearch={handleSearchMovie}
            />
            <MoviesCardList 
            areMoviesLoaded={areMoviesLoaded}
            allMovies={allMovies}
            />
            {areMoviesLoaded ? <Preloader/> : null}
        </div>
    )
}

export default Movies;