import Api from "./Api";
import {moviesApiConfig, messages} from "../config";

class MoviesApi extends Api {
  constructor(settings) {
    super(settings);

    this._moviesEndpoint = settings.moviesEndpoint;
  }

  getAllMovies() {
    return fetch(`${this._baseUrl}/${this._moviesEndpoint}`)
      .then(this._handleResponse);
  }
}

export default new MoviesApi(moviesApiConfig, messages.baseErrorMessag);