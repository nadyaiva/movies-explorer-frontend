import "./Movies.css";
import { useState} from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

import moviesApi from "../../utils/Api/MoviesApi";

function Movies() {

   const [allMovies, setAllMovies] = useState([]);
 //   const [moviesToRender, setMoviesToRender] = useState([]);

    
    function handleSearchMovie(inputData) {
        moviesApi.getAllMovies()
            .then(recivedMovies => {
                setAllMovies(recivedMovies)
                console.log(allMovies);
                console.log(inputData);
            })
        }

    return (
        <div className="Movies">
            <Search
                onSearch={handleSearchMovie}
            />
            <MoviesCardList/>
            <Preloader></Preloader>
        </div>
    )
}

export default Movies;