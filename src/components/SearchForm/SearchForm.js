import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm(props) {

    const [error, setError] = useState('');

    const checkErrors = (text) => {
        if (text === '') {
            setError('Заполните это поле!');
        } else {
            setError('');
        }
    }

    const handleChange = (e) => {
        checkErrors(e.target.value);
        props.setMovieRequest(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.findMovies(props.isChecked);
    }

    const handleCheckboxClick = () => {
        props.findMovies(!props.isChecked);
        props.setIsChecked(!props.isChecked);
    }

    return (    
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__film-input">
                <label htmlFor="movie-search" className="search__label"></label>
                <input 
                    type="text" 
                    id="movie-search" 
                    placeholder="Фильм" 
                    className={`search__input ${error ? 'search__input_error' : ''}`}
                    required
                    onChange={handleChange}
                    value={props.movieRequest}
                />
                <button type="submit" className="search__btn"></button>
            </div>
            <span className="search__error">{error}</span>
            <FilterCheckbox text="Короткометражки" isChecked={props.isChecked} handleChange={handleCheckboxClick}/>
        </form>
    );
}

export default SearchForm;
