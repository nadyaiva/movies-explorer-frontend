import "./Page.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import {paths} from "../../utils/config";

import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import CurrentUserContext from "../../contexts/currentUserContext";
import Preloader from "../Preloader/Preloader";

import MainApi from "../../utils/Api/MainApi";
import errorCode from "../../utils/errorCode";

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();

  const isHeaderVisible = Object.values(paths).includes(location.pathname.slice(1))
  && (location.pathname === '/' + paths.main || location.pathname === '/' + paths.movies 
  || location.pathname === '/' + paths.savedMovies || location.pathname === '/' + paths.profile);

  const isFooterVisible = Object.values(paths).includes(location.pathname.slice(1))
  && (location.pathname === '/' + paths.main || location.pathname === '/' + paths.movies 
  || location.pathname === '/' + paths.savedMovies || location.pathname === '/' + paths.profile);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.addToken();
      MainApi.getUser()
        .then((res) => {
          setCurrentUser(res);
          setIsUserSignIn(true);
        })
        .catch((err) => {
          console.log(err);
          handleSignOut();
        })
        .finally(() => setIsAppLoading(false));
    } else {
      setIsUserSignIn(false);
      setIsAppLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isUserSignIn) {
      MainApi.addToken();
      Promise.allSettled([MainApi.getUser(), MainApi.getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user.value);
          setSavedMovies(savedMovies.value || []);
        })
        .catch((err) => {
          console.log(errorCode(err));
        });
    }
  }, [isUserSignIn]);

  const handleSignUp = (formdata) => {
    setIsLoading(true);
    MainApi.signUp(formdata)
      .then(() => {
        handleSignIn(formdata);
      })
      .catch((err) => setServerError(errorCode(err)))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignIn = ({ email, password }) => {
    setIsLoading(true);
    MainApi.signIn({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsUserSignIn(true);
        navigate('/movies');
      })
      .catch((err) => setServerError(errorCode(err)))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsUserSignIn(false);
    setSavedMovies([]);
    setCurrentUser({});
    setIsLoading(false);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isUserSignIn, savedMovies, setSavedMovies }}
    >
    <div className="page">
    {isHeaderVisible ? <Header/> : null}
    <main className="main">
    {isAppLoading
          ? (
          <div className="app-loader">
            <Preloader />
          </div>
            )
          : (
      <Routes>
        <Route path={paths.main} element={<Main/>} />
        <Route path={paths.savedMovies} element={<SavedMovies/>} />
        <Route path={paths.movies} element={<Movies/>} />
        <Route path={paths.signUp} 
                element={
                <Register
                  handleSubmit={handleSignUp}
                  isLoading={isLoading}
                  serverError={serverError}
                  setServerError={setServerError}
                  />
                } 
              />
        <Route path={paths.signIn} 
                element={
                <Login
                handleSubmit={handleSignIn}
                  isLoading={isLoading}
                  serverError={serverError}
                  setServerError={setServerError}
                  />
                } 
              />
        <Route path={paths.profile} element={<Profile/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      )}
      </main>
    {isFooterVisible ? <Footer/> : null}
    </div>
    </CurrentUserContext.Provider>
  );
}

export default Page;
