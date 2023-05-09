import './Search.css';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Search() {
    return (
        <section className='search search_wrap'>
            <div className='search__container'>
            <SearchForm />
            <FilterCheckbox />
            </div>
        </section>
    )
}

export default Search;