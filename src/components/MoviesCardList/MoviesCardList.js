import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="card-list">
      <ul className="list-grid">
      {[...Array(10)].map((x, i) =>
      <MoviesCard key={i} />
      )}
      </ul>
      <button className="card-list__more-button">Ещё</button>
    </div>
  )
}

export default MoviesCardList;