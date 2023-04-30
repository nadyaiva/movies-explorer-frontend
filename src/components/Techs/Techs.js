import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
    return (
        <section className="techs section-container">
            <SectionTitle title="Технологии" />
            <h3 className="techs__heading">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__grid">
                <li className="techs__grid-elem">HTML</li>
                <li className="techs__grid-elem">CSS</li>
                <li className="techs__grid-elem">JS</li>
                <li className="techs__grid-elem">React</li>
                <li className="techs__grid-elem">Git</li>
                <li className="techs__grid-elem">Express.js</li>
                <li className="techs__grid-elem">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;