import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <div className="card-list">
      <ul className="list-grid">
        {props.allMovies.map((movie) => (
          <MoviesCard 
            key={movie.id}
            movie={movie}
        />
        ))}
      </ul>
      <button className="card-list__more-button">Ещё</button>
    </div>
  )
}

export default MoviesCardList;