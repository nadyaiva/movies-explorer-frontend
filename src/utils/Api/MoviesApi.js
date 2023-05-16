import Api from "./Api";
import {moviesApiConfig, formMessages} from "../config";

class MoviesApi extends Api {
  constructor(settings) {
    super(settings);

    this._moviesEndpoint = settings.moviesEndpoint;
  }

  getAllMovies() {
    return fetch(`${this._baseUrl}/${this._moviesEndpoint}`)
      .then(this._checkResponse);
  }
}

export default new MoviesApi(moviesApiConfig, formMessages.baseErrorMessag);