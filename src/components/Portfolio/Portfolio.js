import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__cases">
                <li className="portfolio__case">
                    <a href="https://github.com/nadyaiva/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
                </li>
                <li className="portfolio__case">
                    <a href="https://github.com/nadyaiva/russian-travel" className="portfolio__link" target="_blank">Адаптивный сайт</a>
                </li>
                <li className="portfolio__case">
                    <a href="https://github.com/nadyaiva/react-mesto-api-full-gha" className="portfolio__link" target="_blank">Одностраничное приложение</a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;