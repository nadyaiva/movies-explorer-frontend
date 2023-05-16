import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";

function Movies() {
    return (
        <div className="Movies">
            <Search/>
            <MoviesCardList/>
        </div>
    )
}

export default Movies;