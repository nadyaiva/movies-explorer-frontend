import "./MoviesCard.css";

import {moviesApiConfig} from "../../utils/config";

function MoviesCard(props) {

  return (
    <li className="movies-card">
      {console.log(props)}
        <a className="movies-card__link" href='/#' target="_blank">
        <img className="movies-card__cover" src={moviesApiConfig.baseUrl + props.movie.image.url} alt="обложка"/>
        </a> 
        <div className="movies-card__info">
            <div className="movies-card__first-row">
              <p className="movies-card__title">{props.movie.nameRU}</p>
              <button className="movies-card__button" type="button"></button>
            </div>
            
            <p className="movies-card__duration">{props.movie.duration} мин.</p>
        </div>
      
    </li>
  );
}

export default MoviesCard;