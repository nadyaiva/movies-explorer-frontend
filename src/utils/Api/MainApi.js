import Api from "./Api";
import { mainApiConfig, messages } from "../config";

class MainApi extends Api {
    constructor(config) {
        super(config);

        this._signUpUrl = config.signUpUrl;
        this._signInUrl = config.signInUrl;
        this._signOutUrl = config.signOutUrl;
        this._usersUrl = config.usersUrl;
        this._userMeUrl = config.userMeUrl;
        this._moviesUrl = config.moviesUrl;
        this._checkAuthUrl = config.checkAuthUrl;
    }

    signUp(data) {
        return fetch(`${this._baseUrl}/${this._signUpEndpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
          .then(this._handleResponse);
      }

    signIn(data) {
        return fetch(`${this._baseUrl}/${this._signInUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(this._handleResponse)
        .then((data) => {
            localStorage.setItem('jwt', data.token)
            return data;
        });
    }

    signOut() {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._signOutUrl}`, {
            mothod: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse)
    }

    getMeUser() {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._userMeUrl}`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        .then(this._handleResponse);
    }

    editMyUser(userData) {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._userMeUrl}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(this._handleResponse);
    }

    getSavedMovies() {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._moviesUrl}`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'appliction/json',
            }
        })
        .then(this._handleResponse);
    }

    saveMovie(movieData) {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._moviesUrl}`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'appliction/json',
            },
            body: JSON.stringify(movieData)
        })
        .then(this._handleResponse);
    }

    deleteMovie(movieId) {
        const token = this._getToken;
        return fetch(`${this._baseUrl}/${this._moviesUrl}/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'appliction/json',
            },
        })
        .then(this._handleResponse);
    }
}

export default new MainApi(mainApiConfig, messages.baseErrorMessag)