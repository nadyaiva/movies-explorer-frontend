import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section className="about-project section-container">
            <SectionTitle title="О проекте" />
            <ul className="about-project__phases">
                <li className="about-project__phase">
                    <h2 className="about-project__phase-title">Дипломный проект включал 5 этапов</h2>
                    <p className="about-project__phase-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__phase">
                    <h2 className="about-project__phase-title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about-project__phase-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__timeline">
                <p className="about-project__part about-project__part_backend">1 неделя</p>
                <p className="about-project__part about-project__part_frontend">4 недели</p>
                <p className="about-project__part-title about-project__part-title_backend">Back-end</p>
                <p className="about-project__part-title about-project__part-title_frontend">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;