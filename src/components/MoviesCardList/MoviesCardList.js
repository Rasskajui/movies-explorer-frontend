import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import photo from '../../images/movie-preview-pic.jpg'

function MoviesCardList({ page }) {
    return (
        <section className="movies-list">
            <ul className="movies-list__list">
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать Название киношки очень длинное, которое потом сокращать "
                    link={ photo }
                    length="1ч42м"
                />
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать"
                    length="1ч42м"
                />
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать"
                    link={ photo }
                    length="1ч42м"
                />
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать"
                    link={ photo }
                    length="1ч42м"
                />
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать"
                    link={ photo }
                    length="1ч42м"
                />
                <MoviesCard 
                    name="Название киношки очень длинное, которое потом сокращать"
                    link={ photo }
                    length="1ч42м"
                />
            </ul>
            {page === "movies" && <button type="button" aria-label="Загрузить больше фильмов" className="movies-list__more-btn">Ещё</button>}
        </section>
    );
}

export default MoviesCardList;
