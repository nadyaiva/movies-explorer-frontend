import "./NavTab.css";

function NavTab() {
    return (
        <div className="navtab">
            <ul className="navtab__list">
                <li className="navtab__tab">
                    <a className="navtab__link">О проекте</a>
                </li>
                <li className="navtab__tab">
                    <a className="navtab__link">Технологии</a>
                </li>
                <li className="navtab__tab">
                    <a className="navtab__link">Студент</a>
                </li>
            </ul>
        </div>
    );
}

export default NavTab;