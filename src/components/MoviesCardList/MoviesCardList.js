import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="card-list">
    <ul className="list-grid">
    {[...Array(10)].map((x, i) =>
    <MoviesCard key={i} />
    )}
    </ul>
    </section>
  )
}

export default MoviesCardList;