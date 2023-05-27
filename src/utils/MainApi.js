const BASE_URL = 'https://api.movies-explorer.rass.nomoredomains.monster';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const signUp = (formValue) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue)
    })
    .then(checkResponse);
}

export const signIn = (formValue) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: formValue.email,
            password: formValue.password,
        })
    })
    .then(checkResponse)
    .then((data) => {
        localStorage.setItem('token', data.token);
        return data;
    })
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(checkResponse);
}

export const updateUserInfo = (newUserInfo) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newUserInfo)
    })
    .then(checkResponse);
}

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(checkResponse);
}

export const addMovie = (newMovie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newMovie)
    })
    .then(checkResponse);
}

export const deleteSavedMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(checkResponse);
}
