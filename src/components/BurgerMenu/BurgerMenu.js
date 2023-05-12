import './BurgerMenu.css';

function BurgerMenu({isMenuOpen, handleCloseMenu}) {
    return (
        <div className={`burger-menu ${isMenuOpen ? "burger-menu_open" : ""}`}>
        <span className="burger-menu__close" onClick={handleCloseMenu}/>
        <ul className='burger-menu__list'>
            <li className="burger-menu__item">Главная</li>
            <li className="burger-menu__item burger-menu__item_active">Фтльмы</li>
            <li className="burger-menu__item">Сохранённые фильмы</li>
        </ul>
        <button className='burger-menu__accaunt'><span className='burger-menu__accaunt-text'>Аккаунт</span><span className='burger-menu__accaunt-icon'/></button>
        </div>
    )
}

export default BurgerMenu;