import './Header.css';
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
    return(
        <header className="header">
            <Link to="/" className="header__logo logo"></Link>
            {
            !props.isAuth && 
            <ul className="header__buttons">
                <li><Link to="/register" className="header__button">Регистрация</Link></li>
                <li><Link to="/login" className="header__button header__button_accent">Войти</Link></li>
            </ul>
            }
            {
            props.isAuth && 
            <>
                <input type="checkbox" id="check" className="header__menu-check"/>
                <label htmlFor="check" className="header__menu-btn"></label>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><NavLink to="/" className={({isActive}) => `header__nav-link header__nav-link_hidden ${isActive ? "header__nav-link_active" : ""}`}>Главная</NavLink></li>
                        <li><NavLink to="/movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Фильмы</NavLink></li>
                        <li><NavLink to="/saved-movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Сохранённые фильмы</NavLink></li>
                    </ul>
                    <Link to="/profile" className="header__nav-button">Аккаунт</Link>
                </nav>
                <div className="header__overflow"></div>
            </>
            }
        </header>
    );
}

export default Header;
