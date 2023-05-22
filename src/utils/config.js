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
    baseUrl: 'http://localhost:3002',
    usersUrl: 'users',
    userMeUrl: 'me',
    moviesUrl: 'movies',
    signUpUrl: 'signup',
    signInUrl: 'signin',
    signOutUrl: 'signout',
    checkAuthUrl: 'checkAuth'
  }

  export const messages = {
    baseErrorMessage: 'Что-то пошло не так',
    serverError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    noResultsFound: 'Ничего не найдено',
    emptyInputError: 'Вы не ввели текст поиска',
    noSavedMovies: 'Нет сохраненных фильмов',
    notSearchedYet: 'Вы еще не выполняли поиск',
    noKeywordError: 'Нужно ввести ключевое слово',
    signInError: 'При входе что-то пошло не так...',
    signUpError: 'При регистрации что-то пошло не так...',
    profileEditError: 'При редактировании что-то пошло не так...',
    profileEditSuccess: 'Данные успещно изменены',
    emailInputError: 'Введите корректный email.',
    nameInputError: 'От 2 до 30 символов. Только буквы, пробел и дефис.',
    passwordInputError: 'От 2 до 30 символов'
  }