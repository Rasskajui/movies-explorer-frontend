import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className="search">
            <div className="search__film-input">
                <label for="movie-search" className="search__label"></label>
                <input type="text" id="movie-search" placeholder="Фильм" className="search__input" required/>
                <button type="submit" className="search__btn"></button>
            </div>
            <FilterCheckbox text="Короткометражки"/>
        </form>
    );
}

export default SearchForm;
