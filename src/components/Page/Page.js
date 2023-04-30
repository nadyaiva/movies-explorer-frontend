import { BrowserRouter } from "react-router-dom";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";

import "./Page.css";

function Page() {
  return (
    <BrowserRouter>
    <div className="page">
      <Header/>
      <Promo/>
      <NavTab/>
    </div>
    </BrowserRouter>
  );
}

export default Page;
