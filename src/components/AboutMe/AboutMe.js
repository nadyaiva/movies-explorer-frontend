import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import photo from "../../images/Nadya.png"
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="section-container">
            <SectionTitle title="Обо мне" />
        <div className="about-me">
            <img className="about-me__photo" alt="Фото студента" src={photo} />
            <div className="about-me__info">
                <h3 className="about-me__name">Надя</h3>
                <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__description">Я родился и живу в Саратове, 
                закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, 
                а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href="https://github.com/nadyaiva" className="about-me__website" target="_blank"></a>
            </div>
        </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;