import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard(props) {

    const [isSaved, setIsSaved] = useState(props.isSaved? props.isSaved : false);
    const [movieId, setMovieId] = useState(props.isSaved ? props._id : '');

    const formatLength = (length) => {
        if (length >= 60) {
            return `${Math.floor(length / 60)}ч ${length % 60}м`
        }
        return `${length}м`
    }

    function saveMovie() {
        props.onSaveMovie({
            country: props.country,
            director: props.director,
            duration: props.length,
            year: props.year,
            description: props.description,
            image: props.link,
            trailerLink: props.trailerLink,
            thumbnail: props.thumbnail,
            movieId: props.id,
            nameRU: props.name,
            nameEN: props.nameEN,
        })
            .then((movie) => {
               setMovieId(movie._id);
            })
            .then(() => {
                setIsSaved(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteMovie() {
        props.onDeleteMovie(movieId)
            .then(() => {
                setIsSaved(false);
            })
            .then(() => {
                setMovieId('');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <li className="movies-list__movie">
            <a href={props.trailerLink} target="_blank" rel="noopener noreferrer" className="movies-list__link">
                <img src={props.link} alt={props.name} className="movies-list__image" />
            </a>
            <div className="movies-list__line">
                <p className="movies-list__name">{props.name}</p>
                <button type="button" onClick={isSaved ? deleteMovie : saveMovie} aria-label="Сохранить фильм" className={`movies-list__save-btn ${isSaved ? 'movies-list__save-btn_active' : ''}`}></button>
            </div>
            <p className="movies-list__length">{formatLength(props.length)}</p>
        </li>
    );
}

export default MoviesCard;
