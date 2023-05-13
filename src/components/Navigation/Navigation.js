import {Link} from "react-router-dom";
import {paths} from "../../utils/config";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleOpenMenu() {
        setIsMenuOpen(true)
    }

    function handleCloseMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
        <ul className="navigation header__elem">
            <li className="navigation__elem navigation__elem_signup"><Link className="navigation__link" to={paths.signUp}>Регистрация</Link></li>
            <li className="navigation__elem navigation__elem_signin"><Link className="navigation__link navigation__link_signin" to={paths.signIn}>Войти</Link></li>
            <li className="navigation__elem-burger" onClick={handleOpenMenu}></li>
        </ul>
        <BurgerMenu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
        </>
    )
}

export default Navigation;