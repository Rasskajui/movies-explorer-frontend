import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <div className="movies">
            <Header isAuth={true}/>
            <main>
                <SearchForm />
                <MoviesCardList page="movies"/>
            </main>
            <Footer />
        </div>
    );
}

export default Movies;
