import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
        mainApi.getUserInfo(jwt)
        .then((res) => {
            if (res) {
                setLoggedIn(true);
                navigate('/movies', {replace: true});
            }
        })
        .catch((err) => {console.log(err)})
    }
  }, []);
  
  useEffect(() => {
    async function setUser() {
      await mainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {console.log(err)})
    }

    async function loadMovies() {
      setIsFetching(true);
      await moviesApi.getMovies()
        .then((data) => {
          setMovies(data);
        })
        .then(() => {
          setIsFetching(false);
        })
        .catch((err) => {console.log(err)})
    }

    async function loadSavedMovies() {
      setIsFetching(true);
      await mainApi.getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .then(() => {
          setIsFetching(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    if (loggedIn) {
      setUser();
      loadMovies();
      loadSavedMovies();
    }

  }, [loggedIn]);

  function handleLogin(formValue) {
    return mainApi.signIn(formValue)
      .then(() => {
        mainApi.getUserInfo()
          .then((user) => {
            setCurrentUser(user);
            setLoggedIn(true);
          })
          .then(() => {
            navigate('/movies', {replace:true})
          })
          .catch((err) => {
            return Promise.reject(`Ошибка ${err.status}`);
          })
      })
  }

  function handleExit() {
    localStorage.clear('token');
    localStorage.clear('foundMovies');
    localStorage.clear('movieRequest');
    localStorage.clear('isShort');
    setCurrentUser(null);
    setLoggedIn(false);
    navigate('/', {replace: true});
  }

  function onSaveMovie(movie) {
    return mainApi.addMovie(movie)
        .then((savedMovie) => {
          setSavedMovies((state) => [...state, savedMovie]);
          return savedMovie;
        })
        .catch((err) => {
            console.log(err);
        });
}

  function onDeleteMovie(movieId) {
    return mainApi.deleteSavedMovie(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movieId))
      })
      .catch((err) => {
          console.log(err);
      });
  }

  function handleUpdateUserInfo(newUserInfo) {
    return mainApi.updateUserInfo(newUserInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
  }

  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={ <Main isAuth={loggedIn}/> }/>
        <Route 
          path="/movies" 
          element={ 
            loggedIn 
            ? <CurrentUserContext.Provider value={currentUser}>
                <Movies 
                  movies={movies}
                  savedMovies={savedMovies}
                  onDeleteMovie={onDeleteMovie}
                  onSaveMovie={onSaveMovie}
                  isFetching={isFetching}
                />
              </CurrentUserContext.Provider> 
            : <Navigate to="/" replace/> 
          }
        />
        <Route 
          path="/saved-movies" 
          element={ 
            loggedIn 
            ? <CurrentUserContext.Provider value={currentUser}>
                <SavedMovies 
                  savedMovies={savedMovies}
                  onDeleteMovie={onDeleteMovie}
                />
              </CurrentUserContext.Provider> 
            : <Navigate to="/" replace/> 
          }
        />
        <Route 
          path="/profile" 
          element={ 
            loggedIn 
            ? <CurrentUserContext.Provider value={currentUser}>
                <Profile 
                  handleExit={handleExit} 
                  onUpdateUserInfo={handleUpdateUserInfo}
                />
              </CurrentUserContext.Provider> 
            : <Navigate to="/" replace/> 
          }
        />
        <Route path="/register" element={<Register onLogin={handleLogin} isFetching={isFetching}/>}/>
        <Route path="/login" element={<Login onLogin={handleLogin} isFetching={isFetching}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
