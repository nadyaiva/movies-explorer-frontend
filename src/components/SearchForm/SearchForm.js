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
                    value='Поиск фильмов'
                />
                <button className="search-form_-submit" type="submit" />
            </fieldset>
        </form>
    )
}

export default SearchForm;