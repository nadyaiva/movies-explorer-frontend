import "./SearchForm.css";

function SearchForm() {
    return (
         <form className="search-form">
            <fieldset className="search-form__fieldset">
                <div className="search-form__icon"/>
                <input
                    className="search-form__input"
                    type="text"
                    name="movie"
                    placeholder='Фильм'
                    value='Фильмов'
                />
                <button className="search-form__submit" type="submit"><span className="search-form__svg"/></button>
            </fieldset>
        </form>
    )
}

export default SearchForm;