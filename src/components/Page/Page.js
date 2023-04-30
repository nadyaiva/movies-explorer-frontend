import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";

import "./Page.css";

function Page() {
  return (
    <BrowserRouter>
    <div className="page">
      <Header/>
      <Promo/>
    </div>
    </BrowserRouter>
  );
}

export default Page;
