import './Search.css';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Search() {
    return (
        <section className='search'>
            <SearchForm />
            <FilterCheckbox />
        </section>
    )
}

export default Search;