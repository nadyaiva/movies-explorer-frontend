import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Header from '../Header/Header';

function Page() {
  return (
    <BrowserRouter>
    <div className="page">
      <Header/>
        <h1>Nadya</h1>
    </div>
    </BrowserRouter>
  );
}

export default Page;
