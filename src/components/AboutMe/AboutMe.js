import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import photo from "../../images/Nadya.png"
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="section-container">
        <div className="about-me">
            <SectionTitle title="Обо мне" />
            <img className="about-me__photo" src={photo} />
            <h3 className="about-me__name">Nadya</h3>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">Я родился и живу в Саратове, 
            закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, 
            а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="about-me__website"></a>
        </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;