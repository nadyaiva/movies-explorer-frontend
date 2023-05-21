import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useInput from "../../utils/hooks/useInput";

function SearchForm({onSearch}) {
const { pathname } = useLocation();
const isSavedMoviePage = pathname === '/saved-movies';

const { values, setValues, handleChange } = useInput({
    name: '',
    isShortMovies: false
  });

  useEffect(() => {
    if (!isSavedMoviePage) {
      const searchParams = JSON.parse(localStorage.getItem('searchParams'));
      if (searchParams) setValues(searchParams);
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isSavedMoviePage) {
      localStorage.setItem('searchParams', JSON.stringify(values));
    }
    onSearch(values);
    setValues('');
  };

    return (
        <div className='search search_wrap'>
        <div className='search__container'>
         <form className="search-form" onSubmit={handleSubmit}>
            <fieldset className="search-form__fieldset">
                <div className="search-form__icon"/>
                <input
                    className="search-form__input"
                    type="text"
                    name="movie"
                    placeholder='Фильм'
                    id="search-form"
                    value={values || ""}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    required
                />
                <button className="search-form__submit" type="submit">
                    <span className="search-form__svg"/>
                </button>
            </fieldset>
        </form>
        <FilterCheckbox />
        </div>
        </div>
    )
}

export default SearchForm;