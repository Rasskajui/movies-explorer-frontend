import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { shortMovieLength } from '../../utils/constants';

function Movies(props) {

    const [isChecked, setIsChecked] = useState(localStorage.getItem('isShort') === 'true');
    const [movieRequest, setMovieRequest] = useState(localStorage.getItem('movieRequest') || '');
    const [foundMovies, setFoundMovies] = useState(localStorage.getItem('foundMovies') ? JSON.parse(localStorage.getItem('foundMovies')) : []);

    function findMovies(isChecked) {
        const movies = props.movies.filter((movie) => {
            const isNameIncluded =  movie.nameRU.toLowerCase().includes(movieRequest.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieRequest.toLowerCase());
            return isChecked ? 
            isNameIncluded
            : (movie.duration > shortMovieLength) && isNameIncluded
        });
        setFoundMovies(movies);
        localStorage.setItem('foundMovies', JSON.stringify(movies));
        localStorage.setItem('movieRequest', movieRequest);
        localStorage.setItem('isShort', isChecked.toString());
    }

    return (
        <div className="movies">
            <Header isAuth={true}/>
            <main>
                <SearchForm 
                    movieRequest = {movieRequest}
                    setMovieRequest = {setMovieRequest}
                    findMovies = {findMovies}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
                <MoviesCardList 
                    page="movies" 
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    onDeleteMovie={props.onDeleteMovie}
                    onSaveMovie={props.onSaveMovie}
                    foundMovies = {foundMovies}
                    isFetching={props.isFetching}
                />
            </main>
            <Footer />
        </div>
    );
}

export default Movies;
