import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <li className="movies-list__movie">
            <img src={props.link} alt={props.name} className="movies-list__image" />
            <div className="movies-list__line">
                <p className="movies-list__name">{props.name}</p>
                <button type="button" aria-label="Сохранить фильм" className="movies-list__save-btn movies-list__save-btn_active"></button>
            </div>
            <p className="movies-list__length">{props.length}</p>
        </li>
    );
}

export default MoviesCard;
