import { BrowserRouter } from "react-router-dom";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

import "./Page.css";

function Page() {
  return (
    <BrowserRouter>
    <div className="page">
      <Header/>
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </div>
    </BrowserRouter>
  );
}

export default Page;
