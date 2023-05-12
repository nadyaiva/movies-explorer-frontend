import { Route, Routes } from "react-router-dom";

import {paths} from "../../utils/config";

import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import "./Page.css";

function Page() {
  return (
    <div className="page">
    <Header/>
      <Routes>
        <Route path={paths.main} element={<Main/>} />
        <Route path={paths.savedMovies} element={<SavedMovies/>} />
        <Route path={paths.movies} element={<Movies/>} />
        <Route path={paths.signUp} element={<Register/>} />
        <Route path={paths.signIn} element={<Login/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default Page;
