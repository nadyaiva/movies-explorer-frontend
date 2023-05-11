import "./MoviesCard.css";

import cover from '../../images/cover1.png';

function MoviesCard() {
  return (
    <li className="movies-card">
        <a className="movies-card__link" href='/#' target="_blank">
        <img className="movies-card__cover" src={cover} alt="обложка"/>
        <div className="movies-card__info">
            <p className="movies-card__title">33 слова о дизайне</p>
            <button className="movies-card__button" type="button"></button>
        </div>
        
      <p className="movies-card__duration">1ч 47м</p>
      </a> 
    </li>
  );
}

export default MoviesCard;