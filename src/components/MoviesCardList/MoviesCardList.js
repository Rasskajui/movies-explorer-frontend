import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

    const [cardsExposition, setCardsExposition] = useState({
        cardsInRow: window.innerWidth >= 1280 ? 4 : window.innerWidth >= 999 ? 3 : window.innerWidth >= 575 ? 2 : 1,
        defaultRowsQuantity: window.innerWidth >= 1280 ? 3 : window.innerWidth >= 575 ? 4 : 5
    });

    useEffect(() => {
        const handleResize = (evt) => {
            setCardsExposition({
                cardsInRow: evt.target.innerWidth >= 1280 ? 4 : window.innerWidth >= 999 ? 3 : window.innerWidth >= 575 ? 2 : 1,
                defaultRowsQuantity: evt.target.innerWidth >= 1280 ? 3 : evt.target.innerWidth >= 575 ? 4 : 5
            });
            setLoadedMovies(loadedMovies - (loadedMovies % cardsExposition.cardsInRow));
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [loadedMovies, setLoadedMovies] = useState(cardsExposition.cardsInRow * cardsExposition.defaultRowsQuantity);

    const loadMoreCards = () => {
        setLoadedMovies(loadedMovies + cardsExposition.cardsInRow);
    }

    const checkIfSaved = (id) => {
        return props.savedMovies.some((savedMovie) => id === savedMovie.movieId);
    }

    const findMovieId = (id) => {
        return props.savedMovies.find((savedMovie) => id === savedMovie.movieId)._id;
    }

    return (
        <section className="movies-list" aria-label="Список фильмов">
            {props.isFetching ? 
                <Preloader /> :
                <>
                    {props.foundMovies.length === 0 && <Preloader text={"Ничего не найдено"}/>}
                    <ul className="movies-list__list">
                        {props.page === "movies" && props.foundMovies.slice(0, loadedMovies).map((card) => (
                                        <MoviesCard 
                                            key = { card.id }
                                            name={ card.nameRU }
                                            link={ `https://api.nomoreparties.co/${card.image.url}` }
                                            length={ card.duration }
                                            trailerLink = { card.trailerLink }
                                            country = { card.country }
                                            director = { card.director }
                                            year = { card.year }
                                            description = { card.description }
                                            thumbnail = { `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}` }
                                            id = { card.id }
                                            nameEN = { card.nameEN } 
                                            onDeleteMovie = { props.onDeleteMovie }
                                            onSaveMovie = { props.onSaveMovie }
                                            isSaved = { checkIfSaved(card.id) }
                                        _id = { checkIfSaved(card.id) ? findMovieId(card.id) : '' }
                                        />     
                                    )
                                )
                        }
                        {props.page === "saved-movies" && props.foundMovies.map((card) => (
                                        <MoviesCard 
                                            key = { card.movieId }
                                            id = { card.movieId }
                                            name={ card.nameRU }
                                            link={ card.image }
                                            length={ card.duration }
                                            trailerLink = { card.trailerLink }
                                            country = { card.country }
                                            director = { card.director }
                                            year = { card.year }
                                            description = { card.description }
                                            thumbnail = { card.thumbnail }
                                            _id = { card._id }
                                            nameEN = { card.nameEN } 
                                            isSaved = { true }
                                            onDeleteMovie = { props.onDeleteMovie }
                                        />     
                                    )
                                )
                        }

                    </ul>
                </>
            }
            {
                props.page === "movies" 
                && props.foundMovies.length > cardsExposition.cardsInRow * cardsExposition.defaultRowsQuantity 
                && loadedMovies < props.foundMovies.length 
                && <button type="button" onClick={loadMoreCards} aria-label="Загрузить больше фильмов" className="movies-list__more-btn">Ещё</button>
            }
        </section>
    );
}

export default MoviesCardList;
