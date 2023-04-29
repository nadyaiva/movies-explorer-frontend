import {Link} from "react-router-dom";
import {paths} from "../../utils/config";

import './Navigation.css';

function Navigation() {
    return (
        <ul className="navigation">
            <li className="navigation__elem navigation__elem_signup"><Link className="navigation__link" to={paths.signUp}>Регистрация</Link></li>
            <li className="navigation__elem"><Link className="navigation__link" to={paths.signIn}>Войти</Link></li>
        </ul>
    )
}

export default Navigation;