import "./Page.css";
import { Route, Routes, useLocation } from "react-router-dom";

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

function Page() {

  const location = useLocation();

  const isHeaderVisible = Object.values(paths).includes(location.pathname.slice(1))
  && (location.pathname === '/' + paths.main || location.pathname === '/' + paths.movies 
  || location.pathname === '/' + paths.savedMovies || location.pathname === '/' + paths.profile);

  const isFooterVisible = Object.values(paths).includes(location.pathname.slice(1))
  && (location.pathname === '/' + paths.main || location.pathname === '/' + paths.movies 
  || location.pathname === '/' + paths.savedMovies || location.pathname === '/' + paths.profile);

  return (
    <div className="page">
    {isHeaderVisible ? <Header/> : null}
    <main className="main">
      <Routes>
        <Route path={paths.main} element={<Main/>} />
        <Route path={paths.savedMovies} element={<SavedMovies/>} />
        <Route path={paths.movies} element={<Movies/>} />
        <Route path={paths.signUp} element={<Register/>} />
        <Route path={paths.signIn} element={<Login/>} />
        <Route path={paths.profile} element={<Profile/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </main>
    {isFooterVisible ? <Footer/> : null}
    </div>
  );
}

export default Page;
