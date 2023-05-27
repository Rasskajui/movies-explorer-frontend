import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { shortMovieLength } from '../../utils/constants';

function SavedMovies(props) {

    const [isChecked, setIsChecked] = useState(false);
    const [movieRequest, setMovieRequest] = useState('');
    const [foundMovies, setFoundMovies] = useState(props.savedMovies);
    const [searchHappened, setSearchHappened] = useState(false);

    function findMovies(isChecked) {
        setFoundMovies(props.savedMovies.filter((movie) => {
            const isNameIncluded =  movie.nameRU.toLowerCase().includes(movieRequest.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieRequest.toLowerCase());
            return  isChecked ? 
            isNameIncluded
            : (movie.duration > shortMovieLength) && isNameIncluded
        }))
        setSearchHappened(true);
    }

    function onDeleteMovie(movieId) {
        return props.onDeleteMovie(movieId)
            .then(() => {
                setFoundMovies((state) => state.filter((c) => c._id !== movieId))
            })
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
                    page="saved-movies" 
                    savedMovies={props.savedMovies} 
                    onDeleteMovie={onDeleteMovie}
                    foundMovies = {foundMovies}
                    searchHappened={searchHappened}
                />
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;
