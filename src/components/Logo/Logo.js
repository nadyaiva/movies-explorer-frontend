import "./Logo.css";

import {paths} from "../../utils/config";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

function Logo(props) {
    return (
        <Link className={"header__elem " + props.cssClass} to={'/' + paths.main}>
            <img className="logo" src={logo} alt="logo" />
        </Link>
    )
}


export default Logo;