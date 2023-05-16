export const paths = {
    main: '',
    signIn: 'signin',
    signUp: 'signup',
    movies: 'movies',
    savedMovies: 'saved-movies',
    profile: 'profile',
}

export const moviesApiConfig = {
    baseUrl: 'https://api.nomoreparties.co',
    moviesEndpoint: 'beatfilm-movies',
  }
  
  export const mainApiConfig = {
    baseUrl: 'https://api.moviesexplorer.nomoredomains.work',
    usersUrl: 'users',
    userMeUrl: 'me',
    moviesUrl: 'movies',
    signUpUrl: 'signup',
    signInUrl: 'signin',
    signOutUrl: 'signout',
    checkAuthUrl: 'checkAuth'
  }

  export const formMessages = {
    baseErrorMessage: 'Что-то пошло не так',
    serverError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    movieNotFound: 'Ничего не найдено',
    noUsersMovies: 'Нет сохраненных фильмов',
    moviesWereNotSearched: 'Вы еще не выполняли поиск',
    searchMovieFormErrorMessage: 'Нужно ввести ключевое слово',
    signInError: 'Что-то пошло не так...',
    signUpError: 'Что-то пошло не так...',
    profileEditErrorMessage: 'Что-то пошло не так...',
    profileEditSuccessMessage: 'Данные изменены',
    emailInputError: 'Введите корректный email.',
    nameInputError: 'От 2 до 30 символов. Только буквы, пробел и дефис.',
    passwordInputError: 'От 2 до 30 символов'
  }