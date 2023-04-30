import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section className="about-project about-project_container">
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
            
        </section>
    );
}

export default AboutProject;