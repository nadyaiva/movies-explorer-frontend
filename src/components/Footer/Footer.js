import "./Footer.css";

function Footer() {
    return (
        <footer className="footer footer_container">
            <p className="footer__titel">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__main">
                <p className="footer__item footer__item_copyright">2023</p>
            <nav className="footer__nav">
                <a className="footer__item" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
                <a className="footer__item footer__item_last" href="https://github.com/nadyaiva/" target="_blank">Github</a>
            </nav>
            </div>
        </footer>
    );
}

export default Footer;